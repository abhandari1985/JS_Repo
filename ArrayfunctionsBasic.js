//ArrayConcepts - length, push, pop, unshift, indexof, includes, slice
let marks = Array(6)  // if you have already declared variable using let you cannot redeclare it
var marks1 = new Array(20,30,10,55,65,80)  // Way1 to declare an array
var marks1 = [20,30,10,55,65,80]  // Way2 to declare an array 
console.log(marks1[2])
marks1[2]=100
console.log(marks1[2])
console.log(marks1.length)
marks1.push(90) // PUSH to append an array
console.log(marks1)
marks1.pop()    // POP will delete the last element of the array
console.log(marks1)
marks1.unshift(88) // UNSHIFT will add element at the start of the array
console.log(marks1)
console.log(marks1.indexOf(100))
// We will use INCLUDES function to search for elements in an array
console.log(marks1.includes(120))
// create subarray using SLICE from main array
subMarks = marks1.slice(1,4)
console.log(subMarks)
// printing each element of the array
var sum = 0
for(let i=0;i<marks1.length;i++)
{
    console.log(marks1[i])
    sum = sum + marks1[i]
}
console.log(sum)