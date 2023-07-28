function getSeason(month) {
  if ([1, 2, 12].includes(month)) {
    console.log("It's winter.");
  } else if (month > 2 && month < 6) {
    console.log("It's spring.");
  } else if (month > 5 && month < 9) {
    console.log("It's summer.");
  } else if (month > 8 && month < 12) {
    console.log("It's autumn.");
  } else {
    console.log("Invalid month number.");
  }
}

var x = 20;
getSeason(x);
