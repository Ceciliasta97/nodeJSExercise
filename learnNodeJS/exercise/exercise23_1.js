// 写入文件
// 语法
// 以下为异步模式下写入文件的语法格式： fs.writeFile(file, data[, options], callback)

var fs = require('fs');

console.log("准备写入文件");
fs.writeFile('input23.txt','我是通 过fs.writeFile 写入文件的内容', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("------------------");
    console.log("读取写入的数据！");
    fs.readFile('input23.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});