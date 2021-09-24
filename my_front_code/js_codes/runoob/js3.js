
// try{
//     // throw TypeError
//     const x = 1
//     x = 2
// }catch(TypeError){
//     console.log(123)
// }


// var text = '{ "sites" : [' +
// '{ "name":"Runoob" , "url":"www.runoob.com" },' +
// '{ "name":"Google" , "url":"www.google.com" },' +
// '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
// var obj = JSON.parse(text);
// sites = obj.sites
// console.log(sites[0],typeof sites)
// length = sites.length
// for(let i = 0; i < length; i ++){
//     site = sites[i]
//     for(param in site){
//         console.log(param, site[param])
//     }
//     break
// }

// console.log("异步编程")
// var x = function (a, b) {return arguments};
// console.log(x(1,11))

// const x = (x, y) => x * y;
// const x = (x, y) => { return x * y };
// console.log(x(2,11))


// x = findMax(1, 123, 500, 115, 44, 88);
// console.log(x)
// function findMax() {
//     console.log("arguments: ", arguments)
//     var i, max = arguments[0];
//     console.log("arguments[0]: ", arguments[0], i, max)


//     if(arguments.length < 2) return max;
 
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }