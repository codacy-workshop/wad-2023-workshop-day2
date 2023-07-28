function calculateArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

const circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));