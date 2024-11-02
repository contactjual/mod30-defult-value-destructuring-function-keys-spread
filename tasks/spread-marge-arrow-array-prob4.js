const addjust = (array1, array2) => {
    // const spreadArray1 = [...array1];
    // const spreadArray2 = [...array2];
    // const myNewArray = [spreadArray1, spreadArray2];
    const myNewArray = [...array1,...array2];  
    const maxNumber = Math.max(...myNewArray);
    return maxNumber;
}
const value = addjust(array1 = [2, 3, 5, 6, 3, 3], array2 = [4, 6, 87, 89, 7]);
console.log(value);