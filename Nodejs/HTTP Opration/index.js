
var http = require('http');

//create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080);

const server = http.createServer((req, res) => {
   if(req.url === '/posts'){
    res.setHeader('Content-Type', 'application/json');

    res.writeHead(200);
    res.write(
        'hello this is my post'
    )

    res.end();
   }
   else if(req.url === '/home'){
    res.end('this is home page');
   }
}
)
server.listen(4000, ()=> {
    console.log('server is running on port 4000');
})