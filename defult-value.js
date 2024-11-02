// function add(num1, num2){
//     const sum = num1 + num2;
//     console.log(num1, num2, sum);
//     return sum;
// }
function add(num1 = 3, num2 = 5) {
    const sum = num1 + num2;
    console.log(num1, num2, sum);
    return sum;
}

function add() {
};



// -------------------------------------
const first = 1;
const second = 2;
const sum = first+second;
console.log(`the sum of ${first} and ${second} is ${sum}`)



const lineCreate = 'hi john \n' + 'tmi vat kaiso \n' + 'ekhn koi jaw'
console.log(lineCreate);  // or---------------
const lineCreateOthers = `hi john
tmi vat kaiso
ekhn koi jaw`
console.log(lineCreateOthers)


//-----------------------------------
const numbers = [23,45,6,6,87];
const student = {
    name: 'jual',
    Age: 19
}
const calculation = ` take second number ${numbers[1]}, take age of object ${student.Age}, do sum now, sum: ${numbers[1]+student.Age};
}`
console.log(calculation);