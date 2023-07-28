function sumArray(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += parseInt(element);
    }
    return sum;
}

const numbers = [1, 2, 3, "0", 0, 5];

console.log("Sum of array elements:", sumArray(numbers));
