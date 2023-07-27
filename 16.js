function calculateSum(obj) {
  let globalSum = 0;
  for (const elem in obj) {
    globalSum += elem;
  }
  return globalSum;
}

const data = [10, 20, 30];
const sum = calculateSum(data);
console.log(sum * 2);
