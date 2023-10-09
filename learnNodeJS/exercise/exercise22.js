var fs = require('fs');

// // 异步打开文件
console.log("// 异步打开文件");
fs.open('input22.txt', function(err,fd) {
    if(err) {
        return console.error(err);
    }
    console.log("open file successfully");
});

//fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
fs.stat('/home/yc97/Documents/Programs/o1heima/03-javaweb/CaiNiaoNodeJS/exercise/exercise22.js', function(err,stats) {
    console.log(stats.isFile());   //true
    console.log(stats.isDirectory());  //false
})