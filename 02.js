function getSeason(month) {
  if (month < 1 || month > 12) {
    console.log("Invalid month number.");
    return;
  }
  if (month >= 9 && month <= 11) {
    console.log("It's autumn.");
  } else if (month >= 6 && month <= 8) {
    console.log("It's summer.");
  } else if (month >= 3 && month <= 5) {
    console.log("It's spring.");
  } else {
    console.log("It's winter.");
  }
}

var x = 20;

getSeason(x);
