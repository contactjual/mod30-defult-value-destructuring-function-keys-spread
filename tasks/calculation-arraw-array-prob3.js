const calculation = (numbers) => {

    const squaredArray = [];

    for (let key of numbers) {
        const doSquare = key * key;
        squaredArray.push(doSquare);
    }

    const getLength = squaredArray.length;
    sum = 0;
    for (let num of squaredArray) {
        sum = sum + num;
    }

    return sum / getLength;

}
const value = calculation(numbers = [2, 4, 6, 8, 10])
console.log(value)