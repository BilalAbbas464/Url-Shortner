const express = require('express')
const urlRoute = require('./routes/route')
const {handleConnection} = require('./connections/connection')
const Url = require('./models/model')
const path = require('path')
const static_router = require('./routes/static_router')
const user_router = require('./routes/user')
const cookie_parser = require('cookie-parser')
const {checkForAuthentication,restrictTo} = require('./middleware/auth')

handleConnection("mongodb://127.0.0.1:27017/Short-Urls")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(cookie_parser())

app.set('view engine','ejs')

app.set('views',path.resolve('./views'))

app.use(checkForAuthentication)

app.use('/url',restrictTo(["NORMAL"]),urlRoute)

app.use('/user',user_router)

app.use('/',static_router)

app.listen(8000,'localhost',()=>{
    console.log("Server Started")
})