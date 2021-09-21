//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
// module.exports = Hello;



function Hello2() { 
    console.log("函数名是： Hello2") 
}; 
module.exports = Hello2;