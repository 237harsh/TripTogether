const mongoose = require('mongoose')
const reqString = {type: String, required: true}

const UserSchema = new mongoose.Schema({
    fullname : reqString,
    username: reqString,
    email: reqString,
    password: reqString,
    date:{
        type: Date,
        default: Date.now()
    },
    query: {
        type: String,
       
      },
    points: {
        type:Number,
        default: 0
    }
}, {timestamps:true})

const User = mongoose.model('rydousers', UserSchema)

module.exports = User