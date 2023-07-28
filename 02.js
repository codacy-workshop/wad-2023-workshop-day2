const season = (month) => {

}
const winter = [1, 2, 12]
const spring = [3, 4, 5]
const summer = [6, 7, 8]
const autumn = [9, 10, 11]
function getSeason(month) {
    if (winter.includes(month)) {

        console.log("It's winter.");
        return
    }
    if (spring.includes(month)) {
        console.log("It's spring.")
        return
    }
    if (summer.includes(month)) {
        console.log("It's spring.")
        return
    }
    if (autumn.includes(month)) {
        console.log("It's autumn.")
        return
    }

    console.log("Invalid month number.");
}

var x = 5;
getSeason(x);

