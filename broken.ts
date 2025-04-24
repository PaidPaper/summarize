// broken.ts

const user = {
    name: 'Alice',
    age: 'twenty five', // should be a number
    active: 'yes' // should be a boolean
}

function greet(user): string {
    return 'Hello, ' + user.name + '! Your age is ' + user.age.toFixed(2); // age is a string, toFixed will throw
}

let count = "10"; // should be number

count += 5; // string concatenation instead of arithmetic

const users: any = [user, {name: 'Bob'}];

for (let i = 0; i <= users.length; i++) { // off-by-one error
    console.log(greet(users[i]))
}

interface Person {
    name: string
    age?: number
}

const people: Person[] = ['not a person', 123, { name: 'Charlie', age: 'old' }]; // multiple type issues

function doStuff(callback) {
    callback('hello', 123, true) // too many args
}

doStuff((msg: string) => {
    console.log(msg.toUppercase()); // typo: should be toUpperCase
})

function add(a: number, b: number): number {
    return a + b + c; // 'c' is not defined
}

// This async function doesn't return a Promise
async function fetchData() {
    const result = await getData(); // getData is not defined
    return result.data;
}

// Misuse of enum
enum Color {
    Red,
    Green,
    Blue
}
const favoriteColor: Color = "Blue"; // assigning string to enum

// Bad formatting and weird indent
  const   x= 42
if(x=43){
console.log( 'x is 43' )
}
