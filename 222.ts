// mockFile5.ts





// Error 1: Using a variable before it's initialized
let userName: string;
console.log(userName);  // Error: Variable 'userName' is used before being assigned

// Error 2: Function with wrong parameter type
function concatenate(a: string, b: string): string {
  return a + b;
}
let result = concatenate(5, "hello");  // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// Error 3: Misspelled property name in object destructuring
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastNmae }: { firstName: string, lastName: string } = person;  // Error: Property 'lastNmae' does not exist on type 'person'

// Error 4: Incorrect function return type
function divide(a: number, b: number): number {
  return `${a / b}`;  // Error: Type 'string' is not assignable to type 'number'
}

// Error 5: Array type mismatch
let numbersArray: number[] = [1, 2, 3, "four"];  // Error: Type 'string' is not assignable to type 'number'

// Error 6: Incorrect `null` handling in a function
function greetUser(user: { name: string } | null) {
  if (user === null) {
    return "No user found!";
  }
  return `Hello, ${user.name}`;
}

greetUser(null);  // No error here, but passing an invalid value will cause issues in other cases

// Error 7: Unhandled promise rejection
async function fetchData() {
  let data = await fetch('https://api.example.com');  // Error: Promise rejection is not handled
  return data.json();
}

// Error 8: Typing error in class constructor
class Car {
  constructor(public make: string, public year: number) { }

  displayInfo() {
    console.log(`${this.make} - ${this.year}`);
  }
}

let myCar = new Car("Toyota", "2021");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Error 9: Object property access on undefined
let student: { name: string, age: number } | undefined = undefined;
console.log(student.name);  // Error: Cannot read property 'name' of undefined

// Error 10: Incorrect type in array using generic
let stringArray: Array<string> = [1, 2, 3];  // Error: Type 'number' is not assignable to type 'string'

// Error 11: Using a function without typing the return value
function calculateSum(a, b) {  // Error: Parameter 'a' implicitly has an 'any' type
  return a + b;
}

calculateSum(5, 10);

// Error 12: Assigning incompatible types
let isActive: boolean = "true";  // Error: Type 'string' is not assignable to type 'boolean'

// Error 13: Using non-existent method on an object
let list: number[] = [1, 2, 3];
list.reverseList();  // Error: Property 'reverseList' does not exist on type 'number[]'
