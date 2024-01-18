// areaCalculator.test.js

const { calculateCircleArea, calculateRectangleArea, calculateTriangleArea } = require('./areaCalculator');

// Test Case 1: Calculate Circle Area
test('Calculate Circle Area', () => {
  const radius = 5;
  const expectedArea = 78.54; // approximately
  const actualArea = calculateCircleArea(radius);
  expect(actualArea).toBeCloseTo(expectedArea, 2); // Delta is used for floating-point comparison
});

// Test Case 2: Calculate Rectangle Area
test('Calculate Rectangle Area', () => {
  const length = 4;
  const width = 6;
  const expectedArea = 24;
  const actualArea = calculateRectangleArea(length, width);
  expect(actualArea).toBe(expectedArea);
});

// Test Case 3: Calculate Triangle Area
test('Calculate Triangle Area', () => {
  const base = 3;
  const height = 8;
  const expectedArea = 12;
  const actualArea = calculateTriangleArea(base, height);
  expect(actualArea).toBe(expectedArea);
});

// Test Case 4: Calculate Triangle Area with Decimal Values
test('Calculate Triangle Area with Decimal Values', () => {
  const base = 3.5;
  const height = 7.5;
  const expectedArea = 13.125; // approximately
  const actualArea = calculateTriangleArea(base, height);
  expect(actualArea).toBeCloseTo(expectedArea, 3); // Delta is used for floating-point comparison
});
// Test Case 5: Calculate Circle Area with a Zero Radius
test('Calculate Circle Area with a Zero Radius', () => {
  const radius = 0;
  const expectedArea = 0;
  const actualArea = calculateCircleArea(radius);
  expect(actualArea).toBe(expectedArea);
});

// Test Case 6: Calculate Rectangle Area with Zero Length
test('Calculate Rectangle Area with Zero Length', () => {
  const length = 0;
  const width = 8;
  const expectedArea = 0;
  const actualArea = calculateRectangleArea(length, width);
  expect(actualArea).toBe(expectedArea);
});

// Test Case 7: Calculate Circle Area with a Negative Radius
test('Calculate Circle Area with a Negative Radius', () => {
  const radius = -5;
  // Assuming the function throws an error for negative radius
  expect(() => calculateCircleArea(radius)).toThrow('Radius cannot be negative');
});

// Test Case 8: Calculate Rectangle Area with Negative Length
test('Calculate Rectangle Area with Negative Length', () => {
  const length = -3;
  const width = 10;
  // Assuming the function throws an error for negative length
  expect(() => calculateRectangleArea(length, width)).toThrow('Length and width cannot be negative');
});

// Test Case 9: Calculate Circle Area with a Large Radius
test('Calculate Circle Area with a Large Radius', () => {
  const radius = 100;
  const expectedArea = 31415.93; // approximately
  const actualArea = calculateCircleArea(radius);
  expect(actualArea).toBeCloseTo(expectedArea, 2);
});

// Test Case 10: Calculate Rectangle Area with Large Length and Small Width
test('Calculate Rectangle Area with Large Length and Small Width', () => {
  const length = 1000;
  const width = 0.1;
  const expectedArea = 100;
  const actualArea = calculateRectangleArea(length, width);
  expect(actualArea).toBe(expectedArea);
});


