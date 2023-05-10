//We will look into different type of string functions
let day = "tuesday "
console.log(day.length) //find length of string i.e. 8
let subday = day.slice(0,4)
console.log(subday) // tues
console.log(day[0]) // t
let splitday = day.split("s") // splitday will have string separates by s at 0 and 1 index
console.log("string at index 0 is: "+splitday[0]+" and length of string is: "+splitday[0].length)
console.log("string at index 1 is: "+splitday[1]+" and length of string is: "+splitday[1].length)
console.log(splitday[1].trim().length) // to remove leading and trailing white spaces use trim() function
//find difference between the dates 
let arrivalDate = '23'
let departureDate = '29'
let difference = parseInt(departureDate) - parseInt(arrivalDate) // to convert string value to integer use parseInt() mehod
console.log(difference)
difference.toString()
console.log(difference)
//concatenating two strings
let newstring = day + "is a funday. Monday is the first working day."
console.log("Concatenated new string is: "+newstring)
//how to find index value of first occurrence of a specific string - say 'day' in above example
console.log("Index value of first occurrence of 'day' is: "+newstring.indexOf('day'))
//how to find number of occurrences of a specific string - say 'day' in above example
count=0
val=newstring.indexOf('day')
while(val!= -1)
{
    count++
    val=newstring.indexOf('day',val+1)
}
console.log("Total no. of occurrences of string day is: "+count)