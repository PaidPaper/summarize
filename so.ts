// fakeFile.ts


class Animal {
    constructor(public name: string) { }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


class Dog extends Animal {
    constructor(name: string, public breed: string) {
        // Error 1: Missing 'super()' call in constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks!`);
    }

    bark() {
        speak()
    }
}

const myDog: Dog = new Dog("Rex");  // Error 2: Missing breed argument in constructor

myDog.speak();

const addNumbers = (a: number, b: string): number => {
    // Error 3: Type mismatch. 'b' should be a number, not a string
    return a + b;
};

console.log(addNumbers(5, "10"));

const myString: string = 10;  // Error 4: Type mismatch, 'myString' should be a string
console.log(myString);
