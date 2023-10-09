how to run:


e.g for exercise2.js
step 1: $ cd /home/yc97/Documents/Programs/o1heima/03-javaweb/CaiNiaoNodeJS/exercise
step 2: $ node -v
step 3: $ node exercise2.js

e.g for how to 安装模块 by using npm
step 1: $ npm install <Module Name>
   e.g: 安装Node.js web框架模块 express:
   e.g: $ npm install express

查看安装信息: $ npm list -g

Node.js 事件循环: $ node exercise4.js

stream: 
1. pipe stream: transfer data from input.txt to output.txt
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
example: exercise10.js
2. gz stream链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
example: exercise11.js: compress the input file
         exercise12.js: decompress the gz input file
