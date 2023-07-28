function createNumberFunctions() {
    let nums = [];
    for (let i = 0; i < 10; i++) {
        (function (index) {
            nums[index] = function (j) {
                return index + j;
            };
        })(i);
    }
    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
