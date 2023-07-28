function calculateSum(obj) {
  let sumUp=0;
  for (let elem in obj) {
    sumUp += elem;
  }
  return sumUp;
}

const data = [10, 20, 30];

console.log(calculateSum(data) * 2);