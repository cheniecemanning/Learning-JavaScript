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
console.log(arr2);

const brad = {
    name: "Brad",
    age: 24
};

const person2 = {
    ...brad,
    email: "brad@gmail.com"
};

console.log(person2)
// -----------------------DESTRUCTURING-----------------------

// CLASSES

// SUBCLASSES

// MODULES