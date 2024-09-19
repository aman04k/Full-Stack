const fs = require("node:fs");
let data = fs.readFileSync("simple.txt", "utf8");
console.log(data);


fs.appendFileSync("simple.txt", " \n himanshu");


fs.writeFile('simple.txt', 'hello world', (err) => {
    if (err) throw err;
}
)