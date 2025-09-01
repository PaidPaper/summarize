// greet.ts

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function sayHi(name: string): string {
    return `Hi, ${name}!`;
}

function sayGoodbye(name: string): string {
    return `Goodbye, ${name}!`;
}

// Example usage
const userName = 'Alice';
console.log(greet(userName)); // Output: Hello, Alice!

const userName = 'Bob';
console.log(greet(userName)); // Output: Hello, Bob!

const userName = 'Charlie';
console.log(greet(userName)); // Output: Hello, Charlie!