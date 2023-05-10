//JS function is a block of code designed to perform a particular task. 
//JS function is executed when something invokes it(calls it)
//Function to compute product of p1 and p2
function productFunction(p1,p2)
{
    return p1 * p2
}
console.log(productFunction(5,10))
//JS function is defined with function keyword, followed by a name, followed by parenthesis()
//funcion parameters are listed inside the parentheses () in function definition
//function arguments are the values received by the function when it is invoked
//inside function the arguments(the parameters) behave as local variables
//when JS reaches a return statement, function will stop executing. function often compute a return value
//why functions? reuse code many times with different arguments to produce different results.
function toCelsius(fahrenheit)
{
    return ((5/9) * (fahrenheit-32))
}
console.log(toCelsius(100))
//function with name to get sum of two numbers
function add(a,b)
{
    return a+b
}
let sum = add(7,9)
console.log(sum)
//function without any name =>anonymous funtion
let sumOfintegers = function(c,d)
{
    return c+d
}
console.log(sumOfintegers(12,98))
//You can minimize your code using fat pipe or arrow function
let sumOfnumbers = (c,d)=>c+d
console.log(sumOfnumbers(12,98))
