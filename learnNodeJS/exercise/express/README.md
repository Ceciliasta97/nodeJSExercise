Express 简介

1.
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站。
Express 框架核心特性：
    可以设置中间件来响应 HTTP 请求。
    定义了路由表用于执行不同的 HTTP 请求动作。
    可以通过向模板传递参数来动态渲染 HTML 页面。


2.
equest 和 response 对象的具体介绍：
Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性
Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。

3. 路由
我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。
在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。


4. 
静态文件
Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
app.use('/public', express.static('public'));



express_demo.js:
1. terminal: $ node express_demo.js
2. 在浏览器中访问 http://127.0.0.1:8081


express_demo2.js:
1. terminal: $ node express_demo2.js
2. 在浏览器中访问 http://127.0.0.1:8081 /  http://127.0.0.1:8081/list_user / http://127.0.0.1:8081/abcd / http://127.0.0.1:8081/abcdefg

express_demo3.js:
1. terminal: $ node express_demo3.js
2. 在浏览器中访问 http://127.0.0.1:8081/public/img/pic2.jpg

index.html + server.js   :   GET 方法 以下实例演示了在表单中通过 GET 方法提交两个参数
1. terminal: node server.js 
2. 浏览器访问 http://127.0.0.1:8081/index.html

index2.html + server2.js   :   POST 以下实例演示了在表单中通过 POST 方法提交两个参数，我们可以使用 server.js 文件内的 process_post 路由器来处理输入
1. terminal: node server2.js 
2. 浏览器访问 http://127.0.0.1:8081/index2.html

index3.html + server3.js   :   文件上传
1. terminal: node server3.js 
2. 浏览器访问 http://127.0.0.1:8081/index3.html


