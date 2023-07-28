let globalSum = 0;

let elem = 2;

function calculateSum(obj) {
  let sumUp=0;
  for (elem in obj) {
    sumUp += elem;
  }
  return sumUp;
}

const data = [10, 20, 30];

console.log(calculateSum(data) * elem);