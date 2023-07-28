function generateFunctions() {
  const functions = [];
  const func = (i) =>
    function () {
      console.log("Function " + i + " was called.");
    };
  for (let i = 0; i < 3; i++) {
    functions.push(func(i));
  }

  return functions;
}

const myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();
