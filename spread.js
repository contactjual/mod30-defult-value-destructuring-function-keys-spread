
// ... is pread oparator

const max = Math.max(45, 45, 56, 67, 78, 76);
console.log(max);

const numbers = [23, 45, 56, 76, 43, 54, 78, 98];
// const arrayMax = Math.max(numbers);
console.log(...numbers);    // shodhu upahdan golo pabo
console.log(numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax);



// konu array or object er upaden golo copy kora hoy 

// Array 

const myArray = [1, 3, 5, 7, 8, 9];

console.log(myArray);
console.log(...myArray);



const copyedArray = [...myArray];

console.log(copyedArray);



// Object 

const myObject = {name: 'jual', age: 30, class: 13};

console.log(myObject);


const newObject = {...myObject};

console.log(newObject);



