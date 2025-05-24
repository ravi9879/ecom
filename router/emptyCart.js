const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();


router.post('/empty-cart/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;
        const f = await Cart.deleteMany({ user_id: user_id });
        res.send("success");
    } catch (error) {
        res.send("error");
    }

}) 

module.exports = router ;