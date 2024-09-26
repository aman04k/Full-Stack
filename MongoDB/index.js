const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 4000;
const app = express(); 

app.use(express.static(__dirname)); 
mongoose.connect('mongodb://127.0.0.1:27017/Student', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(express.urlencoded({ extended: true })); 

const db = mongoose.connection;
db.once('open', function () {
    console.log('MongoDB Connected successfully');
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

});
const Users = mongoose.model('User', userSchema); 

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/post', async (req, res) => {
    const { name, email, password } = req.body; 

    const user = new Users({
        name: name,
        email: email,
        password: password
    });

    await user.save();
    console.log(user);
    res.send("Form Submission Successfully");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
