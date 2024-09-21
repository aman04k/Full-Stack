// import {a} from './httpModul.js'

// console.log(a)

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })



// app.listen(3000)
// console.log('Success! Listening on port 3000')




const colors = require('colors');

// console.log('Success! Listening on port 3000'.rainbow)
// console.log('Hello, GeeksforGeeks Learner'.red);  
// console.log('Hello, GeeksforGeeks Learner'.bgMagenta);  
// console.log('Hello, GeeksforGeeks Learner'.bgYellow.red);


colors.setTheme({ 
    info: 'green', 
    data: 'grey', 
    help: 'cyan', 
    warn: 'yellow', 
    debug: ['blue','bold'], 
    error: ['red', 'underline', 'bgWhite'] 
}); 
  
console.log("This is a debug line".debug); 
console.log("This is an error".error); 
console.log("This is a warning".warn);