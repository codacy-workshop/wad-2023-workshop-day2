let password = "password";

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  password = password.concat(numbers[i]);
}

console.log("Password:", password);
