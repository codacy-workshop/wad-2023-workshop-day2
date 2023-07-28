var elem = 2

function calculateSum(obj) {
  let sum = 0;
  for (elem in obj) {
    if (obj.hasOwnProperty(elem)) globalSum += elem;
  }
  return sum
}

var data = [10, 20, 30];

const sum = calculateSum(data);
console.log(sum * elem);
