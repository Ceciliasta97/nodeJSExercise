var fs = require('fs');

// 异步读取
fs.readFile('input21.txt', function(err,data) {
    if(err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input21.txt');
console.log("同步读取: " + data.toString());
console.log("program terminate");