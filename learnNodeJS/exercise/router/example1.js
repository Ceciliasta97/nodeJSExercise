var http = require("http");
var url = require("url");
const { exit } = require("process");
var events = require('events');
const { request, response } = require("express");

// create eventEmitter object
var eventEmitter = new events.EventEmitter();

// route 根路径 
eventEmitter.on('/', function(method, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello world, this is cecilia\n');
});

// route 404
eventEmitter.on('404', function(method, url, response) {
    response.writeHead('404', {'Content-Type': "text/plain"});
    response.end('404 not found\n');
});

//  启动服务 
http.createServer(function(request, response) {
    console.log(request.url);

    // 分发 
    if (eventEmitter.listenerCount(request.url) > 0) {
        eventEmitter.emit(request.url, request.method, response);
    }
    else {
        eventEmitter.emit('404', request.method, request.url, response);
    }
}).listen(8888);

console.log("server running at http://127.0.0.1:8888/");