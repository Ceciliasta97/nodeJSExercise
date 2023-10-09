const { error } = require('console');
var fs = require('fs');
var data = '';

// create rteadble stream
 var readerStream = fs.createReadStream('input8.txt');

 // set encode: uft-8
 readerStream.setEncoding('UTF8');

 // deal with stream -> data, end, error
 readerStream.on('data', function(chunk) {
    data += chunk;
 });

 readerStream.on('end', function() {
    console.log(data);
 });

 readerStream.on('error',function(err) {
    console.log(err.stack);
 });

 console.log("程序执行完毕");