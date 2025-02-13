const {get_User} = require('../service/auth')

async function restirectToLoggedInUser(req,res,next) {
    const Id = req.headers['Authorization'];
    console.log(Id)
    if(!Id) return res.redirect('/login');
    const token = Id.split('Bearer ')[1];
    const find = get_User(token);
    if(!find) return res.redirect('/login');
    req.user = find;
    next()
}

async function check_Auth(req,res,next) {
    const Id = req.headers['authorization'];
    const token = Id.split('Bearer ')[1];
    const find = get_User(token);
    req.user = find;
    next()
}

module.exports = {
    restirectToLoggedInUser,
    check_Auth,
}