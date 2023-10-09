var fs = require('fs');

// crearte a reable stream
var readerStream = fs.createReadStream('input10.txt');

// create a writeable stream
var writerStream = fs.createWriteStream('output10.txt');

// use pipe 
// read content from input10.txt and output to output10.txt
readerStream.pipe(writerStream);

console.log("program excution finish");
