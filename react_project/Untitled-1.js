// console.log("hello world !!")

// Node.js 创建第一个应用
// 步骤一、引入 required 模块
// 我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http，实例如下:

var http = require("http");
http.createServer(function (request, response){
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');