什么是 REST？
REST即表述性状态传递（英文：Representational State Transfer

表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的一个子集）以及HTML（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。REST 通常使用 JSON 数据格式。

以下为 REST 基本架构的四个方法：
    GET - 用于获取数据。
    PUT - 用于更新或添加数据。
    DELETE - 用于删除数据。
    POST - 用于添加数据。


RESTful Web Services
Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。
基于 REST 架构的 Web Services 即是 RESTful。


example 1:
server.js + users.json
1. $ node server.js 
2. 应用实例，访问地址为 http://127.0.0.1:8081/listUsers

example 2: add a new user
server2.js + users.json
1. $ node server2.js 
2. 应用实例，访问地址为 http://127.0.0.1:8081/addUser

example 3: show searched user detail
server3.js + users.json
1. $ node server3.js 
2. 应用实例，访问地址为 http://127.0.0.1:8081/2

example 4: delete a user
server4.js + users.json
1. $ node server4.js 
2. 应用实例，访问地址为 http://127.0.0.1:8081/deleteUser
