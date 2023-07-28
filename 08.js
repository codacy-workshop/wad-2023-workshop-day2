function calculateArea(radius) {
    const PI = 3.141592653589793238462643383279502884197;
    const area = PI * radius * radius;
    return area;
}

const circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));