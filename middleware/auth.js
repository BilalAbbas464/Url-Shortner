const {get_User} = require('../service/auth')

function checkForAuthentication(req,res,next){
    // const headerValue = req.headers['Authorization'];
    const cookie = req.cookies?.id; 
    if(!cookie) return next()
    const user = get_User(cookie)
    req.user = user
    return next()
}

function restrictTo(roles=[]){
    return function(req,res,next){
        if(!req.user) return res.redirect('/login')
        if(!roles.includes(req.user.role)) return res.end("UnAuthorized")
        return next();
        }
}

module.exports = {
    checkForAuthentication,
    restrictTo,
}