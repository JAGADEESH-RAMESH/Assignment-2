| S.NO | Test Method Name                                                                  | Test Description                                                                                                                                     | Input                     | Expected Output                     | Actual Output                       |
|------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------------------------------|-------------------------------------|
| 1    | calculateCircleArea:Calculate Circle Area                                         | The user wants to calculate the area of a circle.                                                                                                    | Radius: 5                 | 78.54                               | 78.54                               |
| 2    | calculateCircleArea:Calculate Circle Area with a Zero Radius                      | The user wants to calculate the area of a circle with a radius of zero.                                                                              | Radius: 0                 | Invalid                             | Invalid                             |
| 3    | calculateCircleArea:Calculate Circle Area with a Negative Radius                  | The user attempts to calculate the area of a circle with a negative radius.                                                                          | Radius: -5                | Radius cannot be negative           | Radius cannot be negative           |
| 4    | calculateCircleArea:Calculate Circle Area with a Large Radius                     | The user wants to calculate the area of a circle with a large positive radius.                                                                       | Radius: 100               | .31400.00                           | .31400.00                           |
| 5    | calculateRectangleArea:Calculate Rectangle Area                                   | The user wants to calculate the area of a rectangle.                                                                                                 | "Length: 4 Width: 6"      | 24                                  | 24                                  |
| 6    | calculateRectangleArea:Calculate Rectangle Area with Zero Length                  | The user wants to calculate the area of a rectangle with a length of zero.                                                                           | "Length: 0 Width: 8"      | Invalid                             | Invalid                             |
| 7    | calculateRectangleArea:Calculate Rectangle Area with Negative Length              | This test case is designed to verify the function calculateRectangleArea(length, width) by passing a negative value for the length parameter.        | "Length: -3 Width: 10"    | Length and width cannot be negative | Length and width cannot be negative |
| 8    | calculateRectangleArea:Calculate Rectangle Area with Large Length and Small Width | The test case is designed to calculate the area of a rectangle with a large length and a small width using the calculateRectangleArea function.      | "Length: 1000 Width: 0.1" | 100                                 | 100                                 |
| 9    | calculateTriangleArea:Calculate Triangle Area                                     | The test case is intended to calculate the area of a triangle using the calculateTriangleArea function.                                              | "Base: 3 Height: 8"       | 12                                  | 12                                  |
| 10   | calculateTriangleArea:Calculate Triangle Area with Decimal Values                 | This test case is designed to calculate the area of a triangle with decimal values for the base and height using the calculateTriangleArea function. | "Base: 3.5 Height: 7.5"   | 13.12                               | 13.12                               |
