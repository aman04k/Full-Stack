const express = require("express");
const app = express();

app.get("/post", (req, res) => {
    // get all  post from data base and send them
    res.json({posts: "this is all post"})
})

// to get single post
app.get("/post/:id", (req, res) => {
    // get single post from data base and send it
    let params = req.params
    //get a single post from data base and send it
    res.json({message: `this is post with id' ${params.id}`})
})
    // to a create a post
    app.post("/post", (req, res) => {
        // create a post in data base and send it
        res.json({message: "post created"})
    })

    app.put("/post/:id", (req, res) => {
        // update a post in data base and send it
        res.json({message: "post updated"})
    })

    app.delete("/post/:id", (req, res) => {
        // delete a post in data base and send it
        res.json({message: "post deleted"})
    })

app.listen(5000, () => {
    console.log('server is runing on port 5000')
})