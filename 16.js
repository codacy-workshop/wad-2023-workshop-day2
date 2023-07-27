let elem = 2;

function calculateSum(obj) {
  let sum = 0;

  for (const elem in obj) {
    sum += elem;
  }

  return sum;
}

const data = [10, 20, 30];

console.log(calculateSum(data) * 2);
