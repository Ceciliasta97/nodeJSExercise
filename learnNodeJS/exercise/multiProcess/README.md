Node.js 多进程

我们都知道 Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。
每个子进程总是带有三个流对象：child.stdin, child.stdout 和child.stderr。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。

Node 提供了 child_process 模块来创建子进程，方法有：
    exec - child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
    spawn - child_process.spawn 使用指定的命令行参数创建新进程。
    fork - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

方法1.  
exec() 方法
child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
语法如下所示：
child_process.exec(command[, options], callback)
EXAMPLE: support.js + master.js.    terminal: $ node master.js


方法2.  
spawn() 方法
child_process.spawn 使用指定的命令行参数创建新进程，语法格式如下：
child_process.spawn(command[, args][, options])
spawn() 方法返回流 (stdout & stderr)，在进程返回大量数据时使用。进程一旦开始执行时 spawn() 就开始接收响应。
EXAMPLE: support.js + master2.js.    terminal: $ node master2.js

方法3.  
fork 方法
child_process.fork 是 spawn() 方法的特殊形式，用于创建进程，语法格式如下：
child_process.fork(modulePath[, args][, options])
EXAMPLE: support.js + master3.js.    terminal: $ node master3.js