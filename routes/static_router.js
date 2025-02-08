const express = require('express')
const Url = require('../models/model')

const router = express.Router()

router.get('/',async(req,res)=>{
    const all_Urls = await Url.find({})
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