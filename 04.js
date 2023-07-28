function createNumberFunctions() {
  let nums = [];
  for (let i = 0; i < 10; i++) {
    const index = i;
    nums[index] = function (j) {
      return index + j;
    };
  }

  return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
