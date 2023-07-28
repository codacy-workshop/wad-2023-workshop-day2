function getSeason(month) {
    if ([1,2,12].includes(month)) {
        console.log("It's winter.");
    } else if ([3,4,5].includes(month)) {
        console.log("It's spring.");
    } else if ([6,7,8].includes(month)) {
        console.log("It's summer.");
    } else if ([9,10,11].includes(month)) {
        console.log("It's autumn.");
    } else {
        console.log("Invalid month number.");
    }
}

let x = 20;
getSeason(x);
