const jwt = require('jsonwebtoken')
const secret = "Your_Secret_Key"

function set_User(user){
    const payload = {
        id: user._id,
        email: user.email,
    }
    return jwt.sign(payload,secret)
}

function get_User(id){
    if(!id) return null
    try{
        return jwt.verify(id, secret)
    }
    catch(error){
        return null
    }
}

module.exports = {
    set_User,
    get_User
}