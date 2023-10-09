//1. 输出全局变量 __filename 的值
console.log(__filename);

//2. __dirname 表示当前执行脚本所在的目录。
console.log(__dirname);

//3. 
// setTimeout(cb, ms)
// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
// 返回一个代表定时器的句柄值。
function printHello() {
    console.log("hello world");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);


