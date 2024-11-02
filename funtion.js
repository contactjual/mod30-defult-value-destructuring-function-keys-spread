// function decleration 
function add(a, b) {
    return a + b;
}
const sum = add(3, 4);
console.log(sum)




// function expression 
const add2 = function (a, b) {
    return a + b;
}
const sum2 = add2(3, 4);
console.log(sum2)



// arrow funtion-----------------------------------------
const add3 = (a, b) => a + b;
const sum3 = add(3, 4);
console.log(sum3)


// without parameter
const getPi = () => Math.PI
console.log(getPi);


// if mulitple line 
const doMath = (x, y) => {
    const sum = x + y;
    const multiply = x * y;
    const result = sum + multiply;
    return result;
}