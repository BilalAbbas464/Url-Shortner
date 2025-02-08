const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    ShortId:{
        unique:true,
        required:true,
        type:String
    },
    Redirect_url:{
        required:true,
        type:String
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})

const Url = mongoose.model('Urls',Schema)

module.exports = Url