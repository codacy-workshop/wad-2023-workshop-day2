const nums = [];

function createNumberFunctions() { 

    for (let index = 0; index < 10; index++) {
        nums[index] = function (j) {
            return index + j;
        };
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));