const students = [
    {name: "Saif Ahmed", age: 23},
    {name: "Shafiul Alam", age: 21},
    {name: "Shohag Vai", age: 31}
];
//try to access array element by using map.
const names = students.map(x => x.name);
const ids = students.map(x => x.age);
console.log(names, ids);


//try to access array element by using filter.
const namesFilter = students.filter(x => x.age > 25);
console.log("This is filter's result:", namesFilter);


//try to access array element by using find.
const namesFind = students.find(x => x.age > 20);
console.log("This is find's result:", namesFind);
