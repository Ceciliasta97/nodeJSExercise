//4. 
// clearTimeout(t)
// clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
function printHello1() {
    console.log("hello world 1");
}
// 两秒后执行以上函数
var t = setTimeout(printHello1, 2000);
// 清除定时器
clearTimeout(t);
// "hello world 2" won't be printed out causeed by setTimeOut()

console.log("hi");

// setInterval(cb, ms): continues print out until press ctrl+c
function keepPrintHello2() {
    console.log("hello world 2");
}
setInterval(keepPrintHello2, 2000);
