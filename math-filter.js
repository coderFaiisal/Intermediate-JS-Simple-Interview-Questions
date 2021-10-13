const number = [1, 2, 3, 4, 5, 6, 7];

// const result = number.map(function(element){
//     return element * element;
// })
const result = number.map( x => x * x);  //same function with arrow function.
console.log(result);



//filter way to findout specific thing from array.
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = number2.filter(x => x > 5);
console.log(result2);




//"find" use. findout the specific only one thing from array.
const number3 = [1, 2, 3, 4, 5, 6, 7];
const isThere = number3.find(x => x > 5);
console.log(isThere);