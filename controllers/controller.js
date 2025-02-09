const shortId = require('shortid')
const Url = require('../models/model')

async function generateShortId(req,res){
    const body = req.body
    if(!body.url) return res.status(400).json({err:"Url is Required"})
    const ShortId = shortId()
    await Url.create({
        ShortId,
        Redirect_url: body.url,
        visitHistory:[],
        created_By: req.user._id,
    })
    return res.render('home',{
        ShortId,
    })
}

async function handleAnalytics(req,res) {
    const shortId = req.params.shortid
    const result = await Url.findOne({ShortId:shortId})
    return res.json({totalClicks:result.visitHistory.length,
        analytics: result.visitHistory
    })
}

async function handleRedirect(req,res) {
    const shortid = req.params.shortid
    const entry = await Url.findOneAndUpdate({
        ShortId: shortid
    },{
        $push:{
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    })
    return res.redirect(entry.Redirect_url)
    
}

module.exports = {
    generateShortId,
    handleAnalytics,
    handleRedirect,
}