var fs = require('fs');
var zlib = require('zlib');

// compress input11.txt to input11.txt.gz
fs.createReadStream('input11.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input11.txt.gz'));

console.log("program is finished");