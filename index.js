const express = require('express')
const urlRoute = require('./routes/route')
const {handleConnection} = require('./connections/connection')
const Url = require('./models/model')
const path = require('path')
const static_router = require('./routes/static_router')
const user_router = require('./routes/user')

handleConnection("mongodb://IP:Port_number/DB_name")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')

app.set('views',path.resolve('./views'))

app.use('/url',urlRoute)

app.use('/user',user_router)

app.use('/',static_router)

app.listen(8000,'localhost',()=>{
    console.log("Server Started")
})