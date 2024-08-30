const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const User = new Schema({   
    name : {
        type : String,
        required : true
    },
    email_id : { 
        type : String,
        required : true,
        unique : true 
    }, 
    password :{
        type : String ,
        required : true 
    },
    hash_password : {
        type : String , 
        required : true 
    }
})


module.exports = mongoose.model('customers' , User)  ;