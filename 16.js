var elem = 2

function calculateSum(obj) {
    var localSum = 0
  for (elem in obj) {
      localSum += elem;
    }
    return localSum;
}

var data = [10, 20, 30];

console.log(calculateSum(data) * elem);