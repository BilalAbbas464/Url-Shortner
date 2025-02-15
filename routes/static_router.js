const express = require('express')
const Url = require('../models/model')
const {restrictTo} = require('../middleware/auth')

const router = express.Router()

router.get('/',restrictTo(["NORMAL"]),async(req,res)=>{
    const all_Urls = await Url.find({created_By:req.user.id})
    return res.render('home',{
        urls:all_Urls,
    })
})

router.get('/signup',async(req,res)=>{
    return res.render('signup')
})

router.get('/login',async(req,res)=>{
    return res.render('login')
})

module.exports = router