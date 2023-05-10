//Inheritance is main pillar of object oriented programming
//One class can inherit/acquire properties, methods of another class
//class that inherits the properties of other is known as subclass(derived class or child class)
//class whose properties are inherited is known as superclass or parent class
const Person = require("./Jsclasses");
class Pet extends Person
{
    get Location() // This will override Location property value present in Person super class
    {
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }
} 
let pet=new Pet("David","Boon")
pet.fullname()
console.log(pet.Location)