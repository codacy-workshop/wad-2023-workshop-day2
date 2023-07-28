var x = 3; // Asignamos el valor 3 a la variable x

function getSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            return "It's winter.";
        case 3:
        case 4:
        case 5:
            return "It's spring.";
        case 6:
        case 7:
        case 8:
            return "It's summer.";
        case 9:
        case 10:
        case 11:
            return "It's autumn.";
        default:
            return "Invalid month number.";
    }
}

console.log(getSeason(x));