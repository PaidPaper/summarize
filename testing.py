// mockFile4.ts

// Error 1: Variable used before initialization
let greeting: string;
console.log(greeting);  // Error: Variable 'greeting' is used before being assigned

// Error 2: Incorrect type in an array
let numbers: number[] = [1, 2, 3, "four"];  // Error: Type 'string' is not assignable to type 'number'

// Error 3: Incorrect function signature (missing return type)
function subtract(a: number, b: number) {
  return a - b;
}

let difference = subtract(10, "five");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Error 4: Trying to access property on an undefined object
let person: { name: string, age?: number };
console.log(person.age);  // Error: Property 'age' is possibly 'undefined'

// Error 5: Incorrect destructuring assignment
const personDetails = { name: "John", age: 30 };
const { name, address }: { name: string, age: number, address: string } = personDetails;  // Error: Property 'address' is missing in type '{ name: string; age: number; }'

// Error 6: Calling non-existent method on an object
let arr: number[] = [1, 2, 3];
arr.sortDesc();  // Error: Property 'sortDesc' does not exist on type 'number[]'

// Error 7: Using `any` type and causing type errors
let anything: any = 100;
let value: string = anything;  // Error: Type 'any' is not assignable to type 'string'

// Error 8: Function without type annotations for parameters
function greet(name) {  // Error: Parameter 'name' implicitly has an 'any' type
  return `Hello, ${name}`;
}
greet(123);  // This works but could be dangerous without types

// Error 9: Incorrect use of `null` in type
let product: { name: string, price: number | null };
product = { name: "Laptop", price: null };  // Error: Property 'price' cannot be 'null' if it must be a number

// Error 10: Recursion without a base case
function recursive(n: number): number {
  return recursive(n + 1);  // Error: Maximum call stack size exceeded due to recursion
}

// Error 11: Mismatched return type
function multiply(a: number, b: number): string {  // Error: Function signature should return type 'number'
  return a * b;
}

// Error 12: Accessing array element out of bounds
let arr2 = [1, 2, 3];
console.log(arr2[5]);  // Error: Index signature is out of bounds and could return 'undefined'

