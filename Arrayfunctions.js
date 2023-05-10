// REDUCE FILTER and MAP array functions
// using REDUCE array function calculate sum of elements in an array
var marks = new Array(89,100,79,69,59,78,98)
let totalmarks = marks.reduce((sum,marks1)=>sum+marks1,0)             //sum is a accumulator here
let multiplemarks = marks.reduce((mult,marks2)=>mult*marks2,1)        //mult is a accumulator here
console.log(totalmarks)
console.log(multiplemarks)
// Create a new array with even numbers
var size=0
var evenMarks = new Array()
for(var i=0;i<marks.length;i++)
{
    if (marks[i]%2==0)
    {
        evenMarks.push(marks[i])
        size++
    }
}
if(size!=0)
{
    console.log("Here is the new array with even numbers.")
    console.log(evenMarks)
}
else
{
    console.log("There are no even numbers in the array.")
}
// using FILTER array function to get an array with even numbers
let evenArray = marks.filter(mar=>mar%2==0)
let oddArray = marks.filter(mar=>mar%2==1)
console.log("Here is list of even numbers in the array.")
console.log(evenArray)
console.log("Here is list of odd numbers in the array.")
console.log(oddArray)
// using MAP array function create an array with even numbers and multiply each element with 3
let mappedArray = evenArray.map(score=>score*3)
console.log("Here is list of 3 times multiple of even numbers in the array.")
console.log(mappedArray)
// using REDUCE, FILTER and MAP create a new list of array with only even numbers, each element value is multiplied by 5 and also find the sum of array

let arrayNumbers = new Array(13, 17, 16, 18, 20, 12, 15)
let arrayEven = arrayNumbers.filter(evenmar=>evenmar%2==0)
let arrayMulti = arrayEven.map(multi=>multi*5)
let arraySum = arrayMulti.reduce((sum,val)=>sum+val,0)
console.log("List of even numbers is: "+arrayEven)
console.log("List of even numbers multiplied 5 times is: "+arrayMulti)
console.log("Sum of even numbers multiplied 5 times is: "+arraySum)

// CHAINING: We can further reduce this to a single line of code
// Find sum of array having only even numbers and each element is multiplied by 5
let total = arrayNumbers.filter(eve=>eve%2==0).map(eve=>eve*5).reduce((sum,eve)=>sum+eve,0)
console.log("Sum of array having only even numbers and each element is multiplied by 5 is: "+total)