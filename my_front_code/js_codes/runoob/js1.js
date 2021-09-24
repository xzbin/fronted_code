function myFunction() {
    number = Math.random()
    var html_content = Date()
    // document.getElementById("demo").innerHTML = "<h1>我的第一个 JavaScript 函数  <h1>"+ number
    // alert(number)
    
}

// console.log(Date())

// a = 5;
// b = 6;
// c = a + b;
// console.log(c);

x = 1
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值


// for (var i = 0; i < 3; i++) {
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000);
// }


// var cars=new Array("Saab","Volvo","BMW");
// // console.log(cars)
// // var cars=new Array();
// for(let i = 0; i < 20; i++){
//     array_length = cars.length
//     cars[array_length]="Saab "+ i;
// }
// console.log(cars)
// // console.log()
// // cars[1]="Volvo";
// // cars[2]="BMW";

// var person={firstname:"John", lastname:"Doe", id:5566};
// // name=person.lastname;
// // name=person["lastname"];
// console.log(person.lastname)
// console.log(person["firstname"])

var person={
            firstname:"John", 
            lastname:"Doe", 
            id:5566,
            fullName :function(){
                return 123
                // return this.firstname + " "+ this.lastname
            }
        };
console.log(person)
person = null
console.log(person.fullName())