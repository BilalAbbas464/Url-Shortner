const express = require('express')
const {generateShortId,handleAnalytics,handleRedirect} = require('../controllers/controller')

const Router = express.Router()

Router.post("/",generateShortId)

Router.get("/analytics/:shortid",handleAnalytics)

Router.get("/:shortid",handleRedirect)

module.exports = Router