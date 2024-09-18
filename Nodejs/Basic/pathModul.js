const path = require('node:path');

console.log(path.sep)
console.log(path.dirname(__filename))

console.log(path.extname(__filename))
console.log(path.parse(__filename).base)
console.log(path.basename(__filename))
console.log(path.join(__dirname, 'subfolder', 'test.txt'))
console.log(path.resolve(__filename))
console.log(path.resolve(__dirname, 'subfolder', 'test.txt'))
console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute(__filename))