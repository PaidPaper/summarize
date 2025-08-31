// mockFile2.ts

// Error 1: Incorrectly importing non-existent module
import { NonExistentFunction } from 'someModule';  // Error: Module 'someModule' has no exported member 'NonExistentFunction'

// Error 2: Incorrect type declaration for an object
let point: { x: number, y: string } = { x: 10, y: 20 };  // Error: Type 'number' is not assignable to type 'string'

// Error 3: Function returning an incompatible type
function divide(a: number, b: number): string {  // Error: Function signature should return type 'number'
  return a / b;
}


// Error 4: Using an array incorrectly
let arr = [1, 2, 3];
arr.push('4');  // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Error 5: Undefined variable used in template string
let userName: string;
console.log(`Welcome, ${userName}`);  // Error: Variable 'userName' is used before being assigned

// Error 6: Typing mismatch in an array with mixed types
let mixedArray: number[] = [1, '2', 3];  // Error: Type 'string' is not assignable to type 'number'

// Error 7: Non-existent method on a string object
let text: string = "Hello";
text.upperCase();  // Error: Property 'upperCase' does not exist on type 'string'

// Error 8: Assigning incompatible types
let isLoggedIn: boolean = "yes";  // Error: Type 'string' is not assignable to type 'boolean'

// Error 9: Assigning a function that returns void to a variable that expects a return value
const logMessage: () => string = () => {
  console.log("Hello World");
};  // Error: Type 'void' is not assignable to type 'string'

// Error 10: Accessing a property of an undefined object
let userInfo: { name: string } | undefined = undefined;
console.log(userInfo.name);  // Error: Cannot read property 'name' of undefined

// Error 11: Using a non-existent type alias
type Person = { name: string; age: number };
let employee: Employee = { name: 'Alice', age: 30 };  // Error: Type 'Employee' is not defined

// Error 12: Recursive function without base case
function recursiveFunction(n: number): number {
  return recursiveFunction(n - 1);  // Error: Maximum call stack size exceeded due to recursion
}
