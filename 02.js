function getSeason(month) {
    if (month < 1){
        console.log("Invalid month number.");
        return;
    }
    if (month > 12){
        console.log("Invalid month number.");
        return;
    }

    let a = {};
    a[1] = "It's winter.";
    a[2] = "It's winter.";
    a[3] = "It's spring.";
    a[4] = "It's spring.";
    a[5] = "It's spring.";
    a[6] = "It's summer.";
    a[7] = "It's summer.";
    a[8] = "It's summer.";
    a[9] = "It's autumn.";
    a[10] = "It's autumn.";
    a[11] = "It's autumn.";  
    a[12] = "It's winter.";
    
    console.log(a[month]);
}

var x = 3;

getSeason(x);
