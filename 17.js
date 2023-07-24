function default_func() {
    console.log("Reached default")
}


function switchNum(num) {
    switch (num) {
        case 1:
        default:
            default_func();
    }
}

switchNum(2)
switchNum(3)
