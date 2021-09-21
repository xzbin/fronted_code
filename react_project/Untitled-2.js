// console.log("Untitled-2.js")
// node NPM介绍
// node REPL 使用
// Node.js 回调函数

// 读取一个文件内容的简单例子，但是如果文件内容特别大呢？
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束!");

// 读取一个文件内容的简单例子，非阻塞代码实例。
// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");


// Node.js 事件循环
// 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
 
// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');

//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }
 
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
 
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });
 
// // 触发 connection 事件 
// eventEmitter.emit('connection');
 
// console.log("程序执行完毕。");

// Node.js EventEmitter
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件 触发 与事件 监听器 功能的封装。
// setTimeout 时间设置

// var EventEmitter = require('events').EventEmitter; 
// var event = new EventEmitter(); 
// event.on('some_event', function() { 
//     console.log('some_event 事件触发'); 
// }); 
// setTimeout(function() { 
//     event.emit('some_event'); 
// }, 1000);

//event.js 文件
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener2', arg1, arg2); 
// }); 
// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

// EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // 监听器 #1
// var listener1 = function listener1() {
//    console.log('监听器 listener1 执行。');
// }

// // 监听器 #2
// var listener2 = function listener2() {
//   console.log('监听器 listener2 执行。');
// }

// // 绑定 connection 事件，处理函数为 listener1 
// eventEmitter.addListener('connection', listener1);

// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);

// var eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// // 处理 connection 事件 
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log("listener1 不再受监听。");

// // 触发连接事件
// eventEmitter.emit('connection');

// eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// console.log("程序执行完毕。");

var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on("error", function(){
    console.log("error listener")
})
emitter.emit('error'); 