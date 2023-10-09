// process 是一个全局变量，即 global 对象的属性。
// 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。

process.on('exit', function(code) {
    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("this code will not be executed");
    }, 0);
    console.log('退出码为:', code);
});

console.log("program terminate");