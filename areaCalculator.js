// Calculate the area of a circle
function calculateCircleArea(radius) {
  if (radius < 0) {
    throw new Error("Radius cannot be negative");
  }
  return Math.PI * radius * radius;
}

// Calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    throw new Error("Length and width cannot be negative");
  }
  return length * width;
}

// Calculate the area of a triangle
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    throw new Error("Base and height cannot be negative");
  }
  return (base * height) / 2;
}

// Export functions for testing
module.exports = { calculateCircleArea, calculateRectangleArea, calculateTriangleArea };
