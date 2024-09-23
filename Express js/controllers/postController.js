let Post = require('../Models/postModel')


exports.getAllPost = async(req, res) =>{
    try{
        let posts = await Post.find({})
        res.json({status:"success",posts:posts})
    } catch (error){
     res.json({status:"failed", message:error.message})
    }
}

exports.getSinglePost = async(req, res) =>{
    try{
        let posts = await Post.find({})
        res.json({status:"success",posts:posts})
    } catch (error){
     res.json({status:"failed", message:error.message})
    }
}

exports.createPost = async(req, res) =>{
   //console.log(req.body)

   let user = 'Admin'
   let {title,body} = req.body
   let image = 'image'+'/'+req.file.filename

    try{
        await Post.create({title, body, user, image})
        res.json({status:"success",message:"post create"})
    } catch (error) {
        res.json({status:"failed", message:error.message})
    }
}

exports.updatePost = (req, res) =>{
    let {id} = req.params
    let {title, body, user, image} = req.body

    try{
        Post.findByIdAndUpdate(id, {title, body, user, image})
        res.json({status:"success",message:"post update"})
    }catch(error) {
        res.json({status:"failed", message:error.message})
    }
}

exports.deletePost = async (req, res) => {
    let {id} = req.params

try{
        Post.findByIdAndDelete(id)
        res.json({status:"success",message:"post deleted"})
    }catch(error) {
        res.json({status:"failed", message:error.message})
    }
}



