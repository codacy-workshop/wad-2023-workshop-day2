function getSeason(month) {
    switch (month) {
        case 1,2,12:
            console.log("It's winter.");
            break;
        case 3,4,5:
            console.log("It's spring.");
            break;
        case 6,7,8:
    
            console.log("It's summer.");
            break;
        case 9,10,11:
            console.log("It's autumn.");
            break;
        default:
            console.log("Invalid month number.");
    }
}

var x = 20;

getSeason(x);


