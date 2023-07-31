let elem = 2

function calculateSum(obj) {
  let globalSum = 0;
  for (let i of obj) {
    globalSum += i;
  }
  return globalSum;
}

let data = [10, 20, 30];

let globalSum = calculateSum(data);
console.log(globalSum * elem);