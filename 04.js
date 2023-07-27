function t(i) {
    return function (j) {
        return i + j;
    }
}

function createNumberFunctions(nums = []) {
    for (let i = 0; i < 10; i++) {
        nums[i] = t(i);
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
