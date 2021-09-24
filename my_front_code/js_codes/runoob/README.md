
本项目来自 https://www.runoob.com/js/js-intro.html
其目的是想了解js的基本使用

```
在 <head> 或者 <body> 的JavaScript
您可以在 HTML 文档中放入不限数量的脚本。

脚本可位于 HTML 的 <body> 或 <head> 部分中，或者同时存在于两个部分中。

通常的做法是把函数放入 <head> 部分中，或者放在页面底部。这样就可以把它们安置到同一处位置，不会干扰页面的内容。
```
1. 使用 window.alert() 弹出警告框。
2. 使用 document.write() 方法将内容写到 HTML 文档中。
3. 使用 innerHTML 写入到 HTML 元素。
4. 使用 console.log() 写入到浏览器的控制台。

js数据类型：
1. 数字
2. 数组
3. 字符串
4. 对象
5. 函数

JavaScript 使用关键字 var 来定义变量， 使用等号来为变量赋值：

1. =  +  -  *  /	
2. ==  != <  > 	


JavaScript 对大小写是敏感的。
在 JavaScript 中，用分号来结束语句是可选的。

单行：// 开头
多行：/* 开始，以 */ 结尾


在 2015 年以前，我们使用 var 关键字来声明 JavaScript 变量。
在 2015 后的 JavaScript 版本 (ES6) 允许我们使用 const 关键字来定义一个常量，使用 let 关键字定义的限定范围内作用域的变量。
所以 var let const 的区别是什么呢？


JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型
字符串可以是引号中的任意文本。您可以使用单引号或双引号：
布尔（逻辑）只能有两个值：true 或 false。
数组：就是和list一样，可以动态扩展。
var cars=new Array();
var cars=new Array("Saab","Volvo","BMW");
var cars=new Array();
for(let i = 0; i < 20; i++){
    cars[i]="Saab "+ i;
}
console.log(cars)


var person={firstname:"John", lastname:"Doe", id:5566};
name=person.lastname;
name=person["lastname"];

Undefined 这个值表示变量不含有值。
可以通过将变量的值设置为 null 来清空变量。

当您声明新变量时，可以使用关键词 "new" 来声明其类型：
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;

JavaScript 对象是拥有属性和方法的数据。
JavaScript 对象是属性和方法的容器。

delete var2

HTML 事件是发生在 HTML 元素上的事情。
1. HTML 页面完成加载
2. HTML input 字段改变时
3. HTML 按钮被点击

常见的HTML事件
1. onchange	HTML 元素改变
2. onclick	用户点击 HTML 元素
3. onmouseover	用户在一个HTML元素上移动鼠标
4. onmouseout	用户从一个HTML元素上移开鼠标
5. onkeydown	用户按下键盘按键
6. onload	浏览器已完成页面的加载


可以使用内置属性 length 来计算字符串的长度：
1. \'	单引号
2. \"	双引号
3. \\	反斜杠
4. \n	换行
5. \r	回车
6. \t	tab(制表符)
7. \b	退格符
8. \f	换页符

字符串可以是对象
通常， JavaScript 字符串是原始值，可以使用字符创建： var firstName = "John"
但我们也可以使用 new 关键字将字符串定义为一个对象： var firstName = new String("John")

# 字符串方法
charAt()	返回指定索引位置的字符
charCodeAt()	返回指定索引位置字符的 Unicode 值
concat()	连接两个或多个字符串，返回连接后的字符串
fromCharCode()	将 Unicode 转换为字符串
indexOf()	返回字符串中检索指定字符第一次出现的位置
lastIndexOf()	返回字符串中检索指定字符最后一次出现的位置
localeCompare()	用本地特定的顺序来比较两个字符串
match()	找到一个或多个正则表达式的匹配
replace()	替换与正则表达式匹配的子串
search()	检索与正则表达式相匹配的值
slice()	提取字符串的片断，并在新的字符串中返回被提取的部分
split()	把字符串分割为子字符串数组
substr()	从起始索引号提取字符串中指定数目的字符
substring()	提取字符串中两个指定的索引号之间的字符
toLocaleLowerCase()	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLocaleUpperCase()	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLowerCase()	把字符串转换为小写
toString()	返回字符串对象值
toUpperCase()	把字符串转换为大写
trim()	移除字符串首尾空白
valueOf()	返回某个字符串对象的原始值


===	绝对等于（值和类型均相等）	】
!==	不绝对等于（值和类型有一个不相等，或两个都不相等）	


if...else if...else 语句

不同类型的for循环
1. for - 循环代码块一定的次数
2. for/in - 循环遍历对象的属性
3. while - 当指定的条件为 true 时循环指定的代码块
4. do/while - 同样当指定的条件为 true 时循环指定的代码块


for (var i=0;i<cars.length;i++){ 
    document.write(cars[i] + "<br>");
}

null 和 undefined 的值相等，但类型不等：
任何变量都可以通过设置值为 undefined 来清空。 类型为 undefined.
你可以设置为 undefined 来清空对象:
你可以设置为 null 来清空对象:






typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true



在 JavaScript 中有 6 种不同的数据类型：

string
number
boolean
object
function
symbol
3 种对象类型：
Object
Date
Array
2 个不包含任何值的数据类型：
null
undefined

typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object


constructor 属性
constructor 属性返回所有 JavaScript 变量的构造函数。


在 Date 方法 章节中，你可以查看更多关于日期转换为字符串的函数
getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
getFullYear()	从 Date 对象以四位数字返回年份。
getHours()	返回 Date 对象的小时 (0 ~ 23)。
getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
getMonth()	从 Date 对象返回月份 (0 ~ 11)。
getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
getTime()	返回 1970 年 1 月 1 日至今的毫秒数。


在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。
search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。


let 声明的变量只在 let 命令所在的代码块内有效。
const 声明一个只读的常量，一旦声明，常量的值就不能改变


JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。

javascript:void(0) 中最关键的是 void 关键字， void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
void func()
javascript:void func()
void(func())
javascript:void(func())


href="#"与href="javascript:void(0)"的区别
# 包含了一个位置信息，默认的锚是#top 也就是网页的上端。
而javascript:void(0), 仅仅表示一个死链接。
在页面很长的时候会使用 # 来定位页面的具体位置，格式为：# + id。


异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。
在我们学习的传统单线程编程中，程序的运行是同步的（同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行）。而异步的概念则是不保证同步的概念，也就是说，一个异步过程的执行将不再与原有的序列有顺序关系。
简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高


在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。
但是JavaScript 函数描述为一个对象更加准确。
JavaScript 函数有 属性 和 方法。
arguments.length 属性返回函数调用过程接收到的参数个数


箭头函数
(参数1, 参数2, …, 参数N) => 表达式(单一)
// 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

函数显式参数(Parameters)与隐式参数(Arguments)
JavaScript 函数定义显式参数时没有指定数据类型。
JavaScript 函数对隐式参数没有进行类型检测。
JavaScript 函数对隐式参数的个数没有进行检测。


this 关键字
一般而言，在Javascript中，this指向函数执行时的当前对象。

使用构造函数调用函数
如果函数调用前使用了 new 关键字, 则是调用了构造函数。

闭包
```
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
```


所有事物都是对象
JavaScript 提供多个内建对象，比如 String、Date、Array 等等。 对象只是带有属性和方法的特殊数据类型。
布尔型可以是一个对象。
数字型可以是一个对象。
字符串也可以是一个对象
日期是一个对象
数学和正则表达式也是对象
数组是一个对象
甚至函数也可以是对象

