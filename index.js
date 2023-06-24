//  Create a function that computes for the roots of a quadratic equation using arrow function.
//    The inputs would be 3 values (a, b, c) corresponding to ax^2 + bx + c.


// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = promot("Enter first number:");
let b =  prompt("Enter second number:");
let c = prompt("Enter third number:");


// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
};


cited from:
https://www.programiz.com/javascript/examples/quadratic-roots
