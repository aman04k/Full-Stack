const express = require("express");
let router = express.Router()
let {getAllPost, getSingPost, createPost, updatePost, deletePost} = require('../controllers/postController.js')

let multer = require('multer')
let auth = require('../utils/auth.js')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'static/images' )
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})


const images = multer({storage: storage})

router.get('/', getAllPost)

//to get singlepost
router.get('/:id', getSingPost)

//to a create a post
router.post('/', auth, image.single('image'),createPost)
router.put('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
