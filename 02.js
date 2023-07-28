function getSeason(month) {
    let message = "Invalid month number.";
    if (month === 1 || month === 2 || month === 12) {
        message = "It's winter.";
    }
    
    if (month === 3 || month === 4 || month === 5) {
        message = "It's spring.";
    }
    
    if (month === 6 || month === 7 || month === 8) {
        message = "It's summer.";
    }
    
    if (month === 9 || month === 10 || month === 11) {
        message = "It's autumn.";
    }

    console.log(message);
}

var x = 3;

getSeason(x);
