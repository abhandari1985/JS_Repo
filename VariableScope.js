//Difference between var-let-const
/*******************************************************************************
Point 1 :   Scope of var - Meaning where these variables are available for use.
            Scope is global when var variable is declared outside a function.
            var is function scoped when decraled within the function.
********************************************************************************/
//var greeter = "Hey anand"
//function newfuction()
//{
  //  var hello = "hello"
//}
//console.log(hello)
/*Output: ReferenceError: hello is not defined */
/********************************************************************************
Point 2 :   var variable can be redeclared and updated
*********************************************************************************/
var greeter = "hey anand"
const i=4
if (i<5)
{
    greeter = "hey nivaan"
}
console.log(greeter)