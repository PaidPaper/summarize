// mockFile.ts

import { SomeUndefinedClass } from './somewhere';  // Error: module not found

// Error 1: Missing type annotation
let name = "John";

// Error 2: Assigning string to a number variable
let age: number = "25"; // Error: Type 'string' is not assignable to type 'number'

// Error 3: Invalid method in object
const person = {
  name: "Alice",
  age: 30,
  greet: () => {
    console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
  }
};
person.greet();

// Error 4: Typing mismatch in function parameter
function add(a: number, b: string): number {
  return a + b;  // Error: Argument of type 'string' is not assignable to parameter of type 'number'
}

// Error 5: Calling method on possibly undefined variable
let user: { name?: string } | null = null;
console.log(user.name.toUpperCase());  // Error: Object is possibly 'null' or 'undefined'

// Error 6: Undefined variable usage
let isValid: boolean;
if (isValid) {  // Error: Variable 'isValid' is used before being assigned
  console.log('Valid');
}

// Error 7: Type 'any' assignment
let unknownValue: any = 5;
let strValue: string = unknownValue;  // Error: Type 'any' is not assignable to type 'string'

// Error 8: Missing return type on function
function multiply(a, b) {  // Error: Function lacks return type
  return a * b;
}

// Error 9: Incorrect destructuring with wrong type
const [x, y]: [number, string] = [10, 20];  // Error: Type 'number' is not assignable to type 'string'

// Error 10: Using non-existent method
let arr: number[] = [1, 2, 3];
arr.add(4);  // Error: Property 'add' does not exist on type 'number[]'
