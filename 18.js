function generateFunctions() {
    let functions = [];

    for (let i = 0; i < 3; i++) {
        let x = i
        functions.push(function () {
            console.log("Function " + x + " was called.");
        });
    }

    return functions;
}

let myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();