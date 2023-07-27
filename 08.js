function calculateArea(radius) {
    var area = Math.PI * radius * radius;
    return area;
}

var circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));