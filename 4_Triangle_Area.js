/*4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor
Click me to see the solution*/

// Define the lengths of the sides
const a = 5;
const b = 6;
const c = 7;

// Calculate the semi-perimeter
const s = (a + b + c) / 2;

// Calculate the area using Heron's formula
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// Output the result
console.log("The area of the triangle is: " + area);
