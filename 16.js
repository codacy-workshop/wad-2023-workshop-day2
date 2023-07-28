var globalSum = 0;
const elem = 2

function calculateSum(obj) {
  for (var elem in obj) {
    if (elem) {
      globalSum += elem;
    }
  }
}

const data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);