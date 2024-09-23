const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    body:{
        type:String,
        required: true
    },
    user:{
        type:String,
        required: true
    },
    image:{
        type:String
    }

}, {timestamps:true})

let Post = mongoose.model('Post', postSchema)
module.exports = Post