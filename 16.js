
function calculateSum(obj, elem) {
  let sum = 0;
  for (elem in obj) {
    if (obj.hasOwnProperty(elem)) sum += elem;
  }
  return sum
}

const elem = 2
const data = [10, 20, 30];
const sum = calculateSum(data, elem);
console.log(sum * elem);
