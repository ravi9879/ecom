const express = require('express'); 
const router = express.Router();
const jwt = require('jsonwebtoken');  


router.get('/check-auth', (req, res) => { 
    try {
        // const token = req.get('Cookie')?.split('=')[1] || false 
        const token = req.cookies.token || false // Get token from cookies;
        // console.log("Token from cookies:", token);
        if (!token) {
            return res.send({ loggedIn: false});
        }
        // // Verify JWT token
        const decoded = jwt.verify(token, "jwt-secret-key");
        // Optionally, you can fetch user info here if needed
        return res.send({ loggedIn: true, user: decoded.id });
        // return res.json("ravi");
    } catch (err) {
        return res.send({ loggedIn: false });
    }
});


module.exports = router; 