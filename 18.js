function generateFunctions() {
    var functions = [];

    function createFunction(i) {
        return function () {
            console.log("Function " + i + " was called.");
        }
    }

    for (var i = 0; i < 3; i++) {
        functions.push(createFunction(i));
    }

    return functions;
}

var myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();
