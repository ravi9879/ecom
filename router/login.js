const express = require('express');
const User = require('../models/User.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookiePar = require('cookie-parser')
const bcrypt = require('bcrypt')   


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
                const token = jwt.sign({id : user.email_id} , "jwt-secret-key"); 
                const q = cookiePar.JSONCookies("token", token) ;
                console.log(q) ;    
                res.cookie("token", token, {
                    expires: new Date(exp),
                    secure: true,
                    httpOnly: true
                });
                return res.send({ Status: "Success", token: tok  });
            }
        }
    } catch (error) {
        console.log('error2');
    }
});


// router.get('/fetch', fetchUser, async (req, res) => {
//     try {
//         // let userId = req.user.id ;
//         // const user = await Log.findById(userId).select('-password')
//         // console.log(req.user) ;
//         res.send("data");

//         // let userId = req.user.id ;
//         // const user = await Log.findById(userId).select('-password')
//         // console.log(req.user) ;
//         // res.clearCookie("token") ;
//     } catch (error) {
//         console.log('error');

//     }
// })

module.exports = router; 