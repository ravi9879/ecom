const express = require('express'); 
const router = express.Router();
const jwt = require('jsonwebtoken');  


router.get('/check-auth', (req, res) => { 
    try { 
        
        const token = req.cookies.token || false // Get token from cookies;
        // console.log("Token from cookies:", token);
        if (!token) {
            return res.send({ loggedIn: false});
        } 
        const decoded = jwt.verify(token, "jwt-secret-key"); 
        return res.send({ loggedIn: true, user: decoded.id }); 
    } catch (err) {
        return res.send({ loggedIn: false });
    }
});


module.exports = router; 