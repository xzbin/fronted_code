var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

// console.log(var1 +" "+ var2); // 1
// delete var1, var2
// console.log(var1, +" "+var2); // 1

// // 此处不能调用 carName 变量
// function myFunction() {
//     var carName = "Volvo";
//     return carName
//     // 函数内可调用 carName 变量
// }
// console.log(myFunction())

// console.log(Date())

// var carname = 'Volvo XC60';
// var char = carname[0]
// console.log(carname.length)

// var x = "John";
// var y = new String("John");
// console.log(x) // 返回 String
// console.log(typeof y) // 返回 Object

// var x = "John";             
// var y = new String("John");
// console.log(x === y) // 结果为 false，因为 x 是字符串，y 是对象
// for(var i = 0; i < x.length; i++){
//     console.log("index: "+i+ " char: "+x[i])
// }

// var person={fname:"Bill",lname:"Gates",age:56}; 
// var txt = ""
// for (x in person)  // x 为属性名
// {
//     txt=txt+" "+ person[x];
//     console.log(txt)
// }

String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
             }
          }
       }
   }
   return result;
}

// //两种调用方式
// var template1="我是{0}，今年{1}了";
// var template2="我是{name}，今年{age}了";
// var result1=template1.format("loogn",22);
// var result2=template2.format({name:"loogn",age:22});
// console.log(result1)
// console.log(result2)
// //两个结果都是"我是loogn，今年22了

// var str = "Visit Runoob!"; 
// // var n = str.search(/Runoob/i);
// // console.log("n: {0}".format(n))

// new_str = str.replace("Visit","Runoob");
// console.log("n: {0}".format(new_str))

// console.log(1 / 0)

function print(x){
    console.log(x)
}
var txt="";
function message(x){
	// try {
	// 	console.log("Welcome guest!");
    //     throw exception
	// }
	// catch(err) {
	// 	txt="本页有一个错误。\n\n";
	// 	txt+="错误描述：" + err.message + "\n\n";
	// 	txt+="点击确定继续。\n\n";
	// 	console.log(txt);
	// }
    try { 
        if(x == ""){
            print("x: {0}".format(x))
            throw "值为空";
        }
        if(isNaN(x)){
            print("x: {0}".format(x))
            throw "不是数字";
        }
        x = Number(x);
        if(x < 5)    throw "太小";
        if(x > 10)   throw "太大";
    }
    catch(err) {
        print("err info: {0}".format(err))
    }
}
// x = 0
x = NaN
// x = ""
message(x)