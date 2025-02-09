const User = require('../models/user')
const {v4} = require('uuid')
const {set_User} = require('../service/auth')

async function handleCreateUser(req,res) {
    const {name,email,password} = req.body
    await User.create({
        name:name,
        email:email,
        password:password
    })
    return res.render('home')
}

async function handleLogin(req, res) {
    const { email, password } = req.body;
    
    const find = await User.findOne({ email, password });
    
    if (!find) {
        return res.json({ err: "User not Found" });
    }

    const key = v4()
    set_User(key,find)
    res.cookie("id",key)
    return res.redirect('/');
}

module.exports = {
    handleCreateUser,
    handleLogin,
}