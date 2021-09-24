function myFunction(name1, name2){
    // document.getElementById("demo").innerHTML = "12321  "+name1 +"  "+ name2
    document.getElementById("demo").innerHTML = person.fullName({"age1":10, "age2":11})
}

var person={
            firstname:"John", 
            lastname:"Doe", 
            id:5566,
            fullName :function(args){
                if (typeof(args) == "object"){
                    return this.firstname + " "+ this.lastname + " " + JSON.stringify(args)
                }
            },
            print_age: function(condition){
                if (condition > 5){
                    return "A " + condition 
                }else if (condition < 2){
                    return "B " + condition 
            }else{
                return "C " + condition 
            }
        }
        }
// console.log(person)
// person = null
// age = {"age1":10, "age2":11}
// console.log(person.fullName(age))
// console.log(person.print_age(3))

// console.log(typeof age == "object")
// typeof(age) == "object")


// console.log((11.1).constructor )
// myArray = ["123", "3432"]
// console.log(myArray.constructor.toString().indexOf("Array"))

// obj = new Date()
// // console.log(obj.toString())
// console.log(obj.getFullYear())
// console.log(obj.getHours())

var str = "Visit Runoob!"; 
pattern = "oob"
var n = str.search('Runoob');
var txt = str.replace('Runoob',"microsoft");
console.log(txt)
