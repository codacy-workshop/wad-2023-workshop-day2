let globalSum = 0;

let elem = 2

function calculateSum(obj) {
  for (let i of obj) {
    globalSum += i;
  }
}

let data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);