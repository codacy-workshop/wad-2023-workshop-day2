

function calculateSum(obj) {
  var globalSum = 0;
  var elem = 2

  
  for (var elem in obj) {
    globalSum += elem;
  }
}

var data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);