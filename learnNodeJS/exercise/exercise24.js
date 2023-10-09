// 删除文件
// 语法
// 以下为删除文件的语法格式：
// fs.unlink(path, callback)

// delete a file
var fs = new require('fs');

console.log("prepare to delete the file ");
fs.unlink('input24.txt', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("file is deleted successfully");
});

// create a directory now
// directory must exist
console.log("create directory exercise/createExampleDir");
fs.mkdir("../createExampleDir/", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("create directory successfully");
});

// iterate the files in a directory
console.log("查看 /exercise 目录");
fs.readdir("../", function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});

// delete the "createExampleDir" directory
console.log("delete the 'createExampleDir' directory");
fs.rmdir("../createExampleDir/", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("create directory successfully");
});