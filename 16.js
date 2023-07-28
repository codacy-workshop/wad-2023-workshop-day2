var elem = 2;

function calculateSum(obj) {
  let notSoGlobalSum = 0;
  for (let elem in obj) {
    if (obj.hasOwnProperty(elem)) {
      notSoGlobalSum += elem;
    }
  }
  return notSoGlobalSum;
}

var data = [10, 20, 30];

const globalSum = calculateSum(data);
console.log(globalSum * elem);
