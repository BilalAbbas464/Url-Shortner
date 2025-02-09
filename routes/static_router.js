const express = require('express')
const Url = require('../models/model')

const router = express.Router()

router.get('/',async(req,res)=>{
    if(!req.user) return res.redirect('/login')
    const all_Urls = await Url.find({created_By:req.user._id})
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