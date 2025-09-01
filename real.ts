// mockFile3.ts

// Error 1: Using undefined variable before initialization
let name: string;
console.log(name);  // Error: Variable 'name' is used before being assigned

// Error 2: Incorrect array type
let numbers: number[] = [1, 2, 3, '4'];  // Error: Type 'string' is not assignable to type 'number'


// Error 3: Object destructuring with incorrect type
const user = { name: 'John', age: 30 };
const { name, age, isAdmin }: { name: string, age: number, isAdmin: boolean } = user;  // Error: Property 'isAdmin' is missing in type '{ name: string; age: number; }'

// Error 4: Incorrect type for a function parameter
function multiply(x: number, y: number): number {
  return x * y;
}
let result = multiply(2, '3');  // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Error 5: Missing return type in a function
function greet(name) {  // Error: Function lacks return type annotation
  return `Hello, ${name}`;
}
const greeting = greet('Alice');

// Error 6: Using a class instance incorrectly
class Person {
  constructor(public name: string, public age: number) { }
}

let person = new Person('Alice', 25);
console.log(person.name, person.age, person.getAddress());  // Error: Property 'getAddress' does not exist on type 'Person'

// Error 7: Typing mistake in union types
let value: string | number = 100;
value = true;  // Error: Type 'boolean' is not assignable to type 'string | number'

// Error 8: Calling a method on a null object
let employee: { name: string } | null = null;
console.log(employee.name);  // Error: Cannot read property 'name' of null

// Error 9: Function with wrong argument type
function sum(a: number, b: string): number {
  return a + b;  // Error: Argument of type 'string' is not assignable to parameter of type 'number'
}

// Error 10: Accessing properties of an undefined object
let car: { model: string, year: number } | undefined = undefined;
console.log(car.model);  // Error: Cannot read property 'model' of undefined

// Error 11: Misuse of the `any` type leading to errors
let anything: any = { name: 'John' };
let age: number = anything.age;  // Error: Object is possibly 'undefined'

// Error 12: Incorrect conditional assignment
let resultNumber: number;
if (true) {
  resultNumber = 'Hello';  // Error: Type 'string' is not assignable to type 'number'
}

// Error 13: Invalid method usage
let str: string = "Test";
str.trimStart(2);  // Error: Method 'trimStart' does not take any arguments
