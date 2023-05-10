let fruitList = ["mangoes","pomegranate","guava","banana","leechi","watermelon"]
console.log("List of fruits in ascending order is: "+fruitList.sort())
console.log("List of fruits in descending order is: "+fruitList.sort().reverse())

var scoreCard = [19, 17, 15, 13, 20, 18, 009]
console.log(scoreCard.sort())
// sort() function works fine for string array but for numeric array result is not correct.
// BUBBLE SORT : Repeatedly swap 2 adjacent number if they are in wrong order
var limit = scoreCard.length
while (limit > 0)
{
    for(var i=0;i<limit;i++)
    {
        if(scoreCard[i]>scoreCard[i+1])
        {
            temp = scoreCard[i]
            scoreCard[i] = scoreCard[i+1]
            scoreCard[i+1] = temp
        }
    }
    limit--
}
console.log("Sorted numeric array using Bubble sort mechanism in ascending order is: "+scoreCard)
// We will implement custom Bubble sort for recursive iterations 
console.log("Sorted numeric array using javascript method in ascending order is: "+scoreCard.sort((a,b)=> a-b))
console.log("Sorted numeric array using javascript method in descending order is: "+scoreCard.sort((a,b)=> a-b).reverse())