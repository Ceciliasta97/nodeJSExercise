// method 1
function say(word) {
    console.log(word);
} 
function execute(somefunction, value) {
    somefunction(value);
}

execute(say, "hello");

//method 2: create a anonymous function
function execute2(someFunction2, value2) {
    someFunction2(value2);
}
execute2(function(word) {
    console.log(word)
}, "hello");


// 以上代码中，我们把 say 函数作为 execute 函数的第一个变量进行了传递。这里传递的不是 say 的返回值，而是 say 本身！

// 这样一来， say 就变成了execute 中的本地变量 someFunction ，execute 可以通过调用 someFunction() （带括号的形式）来使用 say 函数。

// 当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。 