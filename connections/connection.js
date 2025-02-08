const mongoose = require('mongoose')

async function handleConnection(url){
    return await mongoose.connect(url).then(()=>{
        console.log("MongoDb Connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    handleConnection,
}