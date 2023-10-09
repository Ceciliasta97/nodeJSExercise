var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener 1
var listener1 = function listener1() {
    console.log("listenser 1 is running");
}

// listener 2
var listener2 = function listener2() {
    console.log("listenser 2 is running");
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " listeners listen the events");


// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 stop listen");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " listeners listen");

console.log("程序执行完毕。");