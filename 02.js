function getSeason(month) {
  let message = "Invalid month number.";
  if (month < 1 || month > 12) {
    console.log("Invalid month number.");
    return;
  }
  if (isAutumn(month)) {
    console.log("It's autumn.");
  } else if (isSummer(month)) {
    console.log("It's summer.");
  } else if (isSpring(month)) {
    console.log("It's spring.");
  } else {
    console.log("It's winter.");
  }
}

const isAutumn = (month) => month >= 9 && month <= 11;
const isSummer = (month) => month >= 6 && month <= 8;
const isSpring = (month) => month >= 3 && month <= 5;
const isWinter = (month) => month === 12 || month === 1 || month === 2;

const x = 20;

getSeason(x);
