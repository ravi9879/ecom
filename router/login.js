const express = require('express');
const User = require('../models/User.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookiePar = require('cookie-parser')
const bcrypt = require('bcrypt');
// const { cookie } = require('express-validator');


router.post('/login', async (req, res) => {
    try {
        const { password, email_id } = req.body;
        const user = await User.findOne({ email_id });
        if (!user) {
            res.json("user does not exist");
        }
        else {
            const valid_password = await bcrypt.compare(password, user.hash_password);
            if (!valid_password) {
                res.json("invalid credentials");
            }
            else {
                const exp = Date.now() + 1000;
                const tok = user.email_id;
                const token = jwt.sign({ id: user.email_id }, "jwt-secret-key");
                res.cookie("token", token, {
                    httpOnly: true,
                    // secure: true, // only on https
                    sameSite: "lax", // or "none" if cross-site and using https
                    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
                });
                return res.send({ Status: "Success" }); 
            }
        }
    } catch (error) {
        console.log('error2', error);
    }
}); 


router.post('/logout', async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
            // secure: true, // uncomment if using HTTPS in production
        });
        res.send({ Status: "Logged out" });
    } catch (error) {
        console.log('error2', error);
    }
}); 

 


module.exports = router; 