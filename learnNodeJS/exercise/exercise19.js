// 输出到终端
process.stdout.write("hello world" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

// 输出当前目录
console.log('current directory: ' + process.cwd());

// print out current version
console.log('current version: ' + process.version);

//  输出内存使用情况
console.log(process.memoryUsage());