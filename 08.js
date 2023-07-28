function calculateArea(radius) {
  const pi = 3.14159265;
  var area = pi * radius * radius;
  return area;
}

var circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));
