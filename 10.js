function generatePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j--) {
            pattern += j;
        }
        console.log(pattern);
    }
}

generatePattern(5);