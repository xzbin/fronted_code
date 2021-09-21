// console.log("Untitled-3.js")

// const buf = Buffer.from('你好，中国', 'utf8');
// // 输出 e4bda0e5a5bdefbc8ce4b8ade59bbd
// console.log(buf.toString('hex'));
// // 输出 5L2g5aW977yM5Lit5Zu9
// console.log(buf.toString('base64'));
// // 输出 你好，中国
// console.log(buf.toString('utf8'));


// 创建一个长度为 10、且用 0 填充的 Buffer。
// const buf1 = Buffer.alloc(size=10, fill=7);
// console.log("buf1: ", buf1)
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
// const buf2 = Buffer.alloc(10, 1);
// console.log("buf2: ", buf2)
// const buf3 = Buffer.allocUnsafe(10);
// console.log("buf3: ", buf3)
// const buf4 = Buffer.from([1, 2, 3]);
// console.log("buf4: ", buf4)
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');
// console.log("buf5: ", buf5.toString("utf-8"))

// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");

// console.log("写入字节数 : "+  len);
// console.log("buffer: ",buf.toString("utf-8"))


// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }
// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,15));   //使用 'ascii' 编码, 并输出: abcde
// console.log( buf.toString('utf8',10,15));    // 使用 'utf8' 编码, 并输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde


// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }
// console.log(buf.toJSON())


// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//   return value && value.type === 'Buffer' ?
//     Buffer.from(value.data) :
//     value;
// });

// // 输出: <Buffer 01 02 03 04 05>
// console.log(copy);


// var buffer1 = Buffer.from(('菜鸟教程'));
// var buffer2 = Buffer.from(('www.runoob.com'));
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

// var buffer1 = Buffer.from('ABC');
// var buffer2 = Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);
// console.log("result", result)
// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('RUNOOB');

// //将 buf2 插入到 buf1 指定位置上
// buf2.copy(buf1, 2);

// console.log(buf1.toString());


// var buffer1 = Buffer.from('runoob');
// // 剪切缓冲区
// var buffer2 = buffer1.slice(0,2);
// console.log("buffer2 content: " + buffer2.toString());


// var buffer = Buffer.from('www.runoob.com');
// //  缓冲区长度
// console.log("buffer length: " + buffer.length);

