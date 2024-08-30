const express = require('express');
const User = require('../models/Cart')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

const { body, validationResult } = require('express-validator');


router.post('/delete-cart', async (req, res) => {
    try {
        const { name } = req.body;
        const f = await User.deleteOne({ name : name });    // finding data from mongo db
        // console.log(f) ;
        if (f.deletedCount === 0) {
            res.json("No");
        }
        else {
            res.send("Success");
        }
    } catch (error) {
        console.log('error' , error);
    }
});


module.exports = router; 