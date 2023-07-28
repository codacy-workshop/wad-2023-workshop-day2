function createNumberFunctions() {
  const nums = [];
  const func = (i) => (j) => i + j;
  for (let i = 0; i < 10; i++) {
    nums[i] = func(i);
  }

  return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
