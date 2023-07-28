function calculateSum(obj) {
  let globalSum = 0;
  for (const elem in obj) {
    globalSum += elem;
  }
  return globalSum;
}

const data = [10, 20, 30];
let elem = 2;
const globalSum = calculateSum(data);
console.log(globalSum * elem);
