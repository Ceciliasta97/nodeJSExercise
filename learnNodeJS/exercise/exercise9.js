//写入流

var fs = require('fs');
var data = 'here is cecilia';

// create a writeab;le stream, write into the file 'ouput9.txt'
var writeStream = fs.createWriteStream('output9.txt');

// encode utf8
writeStream.write(data, 'UTF8');

// // 标记文件末尾
writeStream.end();

// deal with stream -> finish, error
writeStream.on('finish', function() {
    console.log("finishing writing");
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("program execution complete");