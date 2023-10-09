// 函数传递是如何让HTTP服务器工作的 

var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello world");
    response.end();
}).listen(8888);