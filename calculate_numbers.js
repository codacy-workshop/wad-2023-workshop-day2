let result = "5+5";

if (result.includes("+")) {
  let numbers = result.split("+");
  let sum = numbers.reduce((a, b) => a + Number(b), 0);
  result = sum;
} else if (result.includes("-")) {
  let numbers = result.split("-");
  let diff = numbers.reduce((a, b) => a - b);
  result = diff;
} else if (result.includes("*")) {
  let numbers = result.split("*");
  let product = numbers.reduce((a, b) => a * b, 1);
  result = product;
} else if (result.includes("/")) {
  let numbers = result.split("/");
  let quotient = numbers.reduce((a, b) => a / b);
  result = quotient;
} else {
  result = "Invalid expression";
}

console.log("the result is: " + result);
