require("dotenv").config(); 

const Razorpay = require('razorpay');
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
});
 



const express = require('express');
const router = express.Router() ; 


router.post('/payment', async (req, res) => {
    try {
        const amount = req.body.amt  ; 
        const options = {
            amount: amount*100,
            currency: 'INR',
            receipt: 'razorUser@gmail.com'
        }  


        razorpayInstance.orders.create(options,
            (err, order) => {
                if (!err) {
                    res.status(200).send({
                        success: true,
                        msg: 'Order Created',
                        order_id: order.id,
                        amount: amount,
                        key_id: RAZORPAY_ID_KEY,
                        product_name: req.body.name,
                        description: req.body.description,
                        contact: "8567345632",
                        name: "Ravi Gupta",
                        email: "ravi@gmail.com"
                    });
                }
                else {
                    res.status(200).send({ success: false, msg: 'Something went wrong!' });
                }
            }
        );

    } catch (error) {
        res.send(error);
    }
}) 

module.exports = router; 

