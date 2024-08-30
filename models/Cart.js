const mongoose = require("mongoose") ;
 // const {Schema} = mongoose ;

const Cart = new mongoose.Schema({ 
    name : {
        type : String ,
        required : true  
    },
    desc : {
        type : String ,
        required : true ,  
    },
    price : { 
        type : Number ,
        required : true 
    },
    image : {
        type : String , 
        required : true 
    },
    user_id : {
        type : String , 
        required : true 
    } ,
    qty : {
        type : Number , 
        required : true 
    }


})


module.exports = mongoose.model('cart' , Cart)  ;