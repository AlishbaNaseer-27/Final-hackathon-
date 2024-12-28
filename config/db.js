const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb+srv://drmuhammadasadnaseer:KjNmCsDlIQ7pxMFu@cluster0.yeawb.mongodb.net/hackathon').then(()=>{
    console.log("connected to data base")
})

module.exports = connection