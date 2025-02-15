const {get_User} = require('../service/auth')

function checkForAuthentication(req,res,next){
    const headerValue = req.headers['Authorization'];
    req.user = null
    if(!headerValue || !headerValue.startsWith('Bearer'))
        return next()
    const token = headerValue.split('Bearer ')[1]
    const user = get_User(token)
    req.user = user
    return next()
}

function restrictTo(roles=[]){
    return function(req,res,next){
        if(!req.user) return res.redirect('/login')
        if(roles.includes(req.user.role)) return res.end("UnAuthorized")
        return next();
        }
}

module.exports = {
    checkForAuthentication,
    restrictTo,
}