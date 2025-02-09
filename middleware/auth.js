const {get_User} = require('../service/auth')

async function restirectToLoggedInUser(req,res,next) {
    const Id = req.cookie?.id
    console.log(req)
    if(!Id) return res.redirect('/login')
    const find = get_User(Id)
    console.log(find)
    if(!find) return res.redirect('/login')
    req.user = find
    next()
}

async function check_Auth(req,res,next) {
    const Id = req.cookies?.id
    const find = get_User(Id)
    req.user = find
    next()
}

module.exports = {
    restirectToLoggedInUser,
    check_Auth,
}