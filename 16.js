function calculateSum(obj) {
  let sum = 0;
  for (let elem in obj) {
    if (obj.hasOwnProperty(elem)) {
      sum += elem;
    }
  }
  return sum
}

const data = [10, 20, 30];

let elem = 2;
console.log(calculateSum(data) * elem);