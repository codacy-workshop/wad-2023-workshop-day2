function getSeason(month) {
    if (month > 12) console.log("Invalid month number.");
    switch (Math.floor(((month + 1) % 12) / 3)) {
        case 0: console.log("It's winter."); break;
        case 1: console.log("It's spring."); break;
        case 2: console.log("It's summer."); break;
        case 3: console.log("It's autumn."); break;
        default: console.log("Invalid month number.");
    }
}

const month = 20;
getSeason(month);
