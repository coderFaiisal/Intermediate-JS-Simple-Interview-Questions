const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const partSlice = nums.slice(2, 6);    //slice don't remove element from array.
console.log("This is slice part", partSlice);
console.log("This is main array:", nums);

const partSplice = nums.splice(3, 4);
console.log("This is splice array:", partSplice);       //splice remove element from main array.
console.log("This is main array:", nums);


const partSplice2 = nums.splice(3, 4, 99, 100, 101);
console.log("This is splice array which inject some elements:", partSplice2);
//splice array can inject element.
console.log("This is main array:", nums);


const together = nums.join(", You ");  //join add all the element of the array.
console.log("join all the element of array:", together);