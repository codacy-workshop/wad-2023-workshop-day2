var nums = [];

function createNumberFunctions() {

    for (let i = 0; i < 10; i++) {
        nums[i] = (function (i) {
                        return function (j) { 
                                    return i + j;
                                };
                    })(i)
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[9](2));