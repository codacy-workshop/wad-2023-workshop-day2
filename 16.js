function calculateSum(obj) {
  let globalSum = 0;
  for (const elem in obj) {
    globalSum += elem;
  }
  return globalSum;
}

let elem = 2;
console.log(calculateSum([10, 20, 30]) * 2);
