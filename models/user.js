const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type: String,
        required: true,
        default: "NORMAL",
    },
    password:{
        type:String,
        required: true,
    }
},{timestamps:true})

const User = mongoose.model('Users',Schema)

module.exports = User