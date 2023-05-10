//object is collection of properties. you can have properties wih type string, numbers, functions
//declaring an object in key value format
let person = {
    firstName: 'Nivaan',
    lastName: 'Bhandari',
    age: 7,
    sex: 'M',
    fullName : function()
    {
        return(this.firstName+this.lastName)
    }
}
//access function property within an object
console.log("Function property: "+person.fullName())
//access object details
console.log(person.firstName)
console.log(person['lastName'])
//update property of an object - here we are chnaging person firstname
person.firstName='Nivaan Singh'
console.log(person.firstName)
//add new property to an object
person.middlename = 'Singh'
console.log(person)
//delete property of an object
delete person.sex
console.log(person)
//to check if property exist in the object
console.log('sex' in person)
//iterate through each property of an object using advance for loop
for(let key in person)
{
    console.log("Iterating in object: "+person[key])
}