var globalSum = 0;

var elem = 2

function calculateSum(obj) {
  for (let i = 0; i < obj.length; i++) {
    globalSum += obj[i];
  }
}

var data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);
