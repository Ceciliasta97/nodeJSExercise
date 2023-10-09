var fs = require('fs');
var zlib = require('zlib');

// decompress input11.txt.gz to input11.txt
fs.createReadStream('input11.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input12.txt'));

console.log("program is finished");