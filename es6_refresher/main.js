// -----------------------CONST & LET-----------------------

const name = "John";
// Can't reassign 
// name = "Cheniece"; Will result in an TypeError 
// const has to be initialised at creation

const person = {
    name: "Janet",
    age: "23"
}

person.name = "Jane";
console.log(person.name);
// Can change values inside of const created object/array
// can't recreate object/array

let nameTwo = "Jack";
// Can be reassigned
nameTwo = "John";
console.log(nameTwo);

// -----------------------ARROW FUNCTIONS-----------------------

// Normal function
function sayHello() {
    console.log("Hello");
}

sayHello()

// Arrow function
const sayHelloTwo = () => console.log("Hellooo")

sayHelloTwo()

// -----------------------FOREACH-----------------------

const fruits = ["Apples", "Oranges", "Pears"];
fruits.forEach(fruit => console.log(fruit));

//The forEach() method executes a provided function once for each array element.

// -----------------------MAP-----------------------

const singleFruit = fruits.map((fruit) => fruit.slice(0, -1))
console.log(singleFruit)

//map returns an array that can be manipulated

// -----------------------FILTER-----------------------

const people = [{
        name: "Sharon",
        gender: "F"
    },
    {
        name: "Shirley",
        gender: "F"
    },
    {
        name: "Dave",
        gender: "M"
    }
]

const people2 = people.filter(person => person.gender !== "M");
console.log(people2);

// returns a filtered array

// -----------------------SPREAD-----------------------

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)]
console.log(arr3);

const brad = {
    name: "Brad",
    age: 24
};

// const person2 = {
//     ...brad,
//     email: "brad@gmail.com"
// };
//console.log(person2)

// -----------------------DESTRUCTURING-----------------------

const profile = {
    name2: "Daphne",
    address: {
        street: "134 Cool Close",
        city: "London"
    },
    hobbies: ["movies", "music"]
};

const {
    name2,
    address
} = profile
const {
    street,
    city
} = profile.address
console.log(`${name2} lives at ${street}`)

// -----------------------CLASSES-----------------------
class Person {
    constructor(name) {
        this.name = name;
        console.log("ran");
    }

    greet() {
        return `Hello my name is ${this.name}`
    }
}

const aPerson = new Person("Sally");
console.log(aPerson.greet());

// SUBCLASSES
//extends a Class

class Customer extends Person {
    constructor(name, age, balance) {
        super(name);
        this.age = age;
        this.balance = balance;
    }

    info() {
        return `${this.name} owes £${this.balance}.00 and is ${this.age} years old`
    }
}

const customer1 = new Customer('Kevin', 32, 500);
console.log(customer1.info())

// MODULES

//file 1 (file.js)
//export const theName = "Jeff";

//file 2 (file2.js)
//import { theName } from './file'; 
