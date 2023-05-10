// We can use Person class methods in another class FunctionScope.js
module.exports = class Person
{
    age = 25 // property value does not change base on the object
    // we can use getter to define new property within class. Remember get denotes property and not method.
    // all your page objects we will create as properties and use getter method to access them
    //location = 'canada' 
    get location()
    {
        return "canada"
    }
    // we can have constructor to a class
    // constructor is a method which executes by default when you create object of the class
    // any properties in constructor are like instance variables
    constructor(firstName,lastName) // firstName , lastName property value will change based on the object
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    // methods - do not confuse with getter
    fullname()
    {
        console.log(this.firstName+" "+this.lastName)
    }

}
//let person = new Person("anand","bhandari") // when firstName, lastName values are passed the scope 
// will remain within the constructor method. To get firstName, lastName values outside the class we 
// need to use this object. this belongs to current class object. here we are creating new property 
// using this object that is accessible to entire class and sending the instance variables to this property
// object is an instance of the class
//let person1 = new Person("nitika","bhandari")
//console.log(person.age)
//console.log(person.location)
//person.fullname()
//person1.fullname()