let globalSum = 0;

let elem = 2;

function calculateSum(obj) {
  if (Array.isArray(obj))
    for (const elem in obj) {
      globalSum += elem;
    }
}

calculateSum([10, 20, 30]);
console.log(globalSum * elem);
