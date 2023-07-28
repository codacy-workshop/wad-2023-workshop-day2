function createNumberFunctions() {
    var nums = [];

    function getFunction(i) {
        return function (j) {
            return i + j;
        };
    }

    for (let i = 0; i < 10; i++) {
        nums[i] = getFunction(i);
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
