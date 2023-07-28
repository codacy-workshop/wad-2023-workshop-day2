function generateFunctions() {

    for (var i = 0; i < 3; i++) {
        var functions = [];
        functions.push(function () {
            console.log("Function " + i + " was called.");
        });
    }

    return functions;
}

var myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();