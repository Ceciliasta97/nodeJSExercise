// 读取文件
// 语法
// 以下为异步模式下读取文件的语法格式：
// fs.read(fd, buffer, offset, length, position, callback)
// 该方法使用了文件描述符来读取文件。

var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open('input23.txt', 'r+', function(err,fd) {
    if(err) {
        return console.error(err);
    }
    console.log("open file successfully");
    console.log("准备读取文件：");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(err) {
            console.log(err);
        }
        console.log(bytes + "  字节被读取");

        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        // 关闭文件
        fs.close(fd, function(err) {  
            if(err) {
                console.log(err);
            }
            console.log("close the file successfully");
            });
        });
    });
