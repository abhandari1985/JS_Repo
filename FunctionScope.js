//Scope of var type in function
//var - global level / function level
//let - global level / block level | cannot be redeclared
//const - cannot be redeclared and reinitialized | while automating we usually assign locators as type const
const Person = require('./Jsclasses') // importing another class methods
var greet = "good morning"
function add(a,b)
{
    var greet = "good afternoon"
    return a+b
}
let sum = add(2,3)
console.log(sum)
if (1==1)
{
    var greet = "good evening"
}
console.log(greet) 
//in above example greet is var type variable and scope is limited within the function or it will be global 
//you will have to define greet globally outside the function

let greet1 = "good morning"
function add(a,b)
{
    let greet1 = "good afternoon"
    return a+b
}
let sum1 = add(6,8)
console.log(sum1)
if (1==1)
{
    let greet1 = "good evening"
}
console.log(greet1) 
let person = new Person("Nivaan","Bhandari")
console.log(person.fullname())