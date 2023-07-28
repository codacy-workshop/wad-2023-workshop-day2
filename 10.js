function generatePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = i; i <= j; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
}

generatePattern(5);