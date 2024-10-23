console.log("basics.ts");

const myAge: number = 25;
console.log(myAge);
// this gives an error as i am trying to give a string value to a number type variable
//myAge = "number";
const myName: string = "Nicky";
console.log(myName);

// cspell:ignore Fakenham
const city = "Fakenham";
console.log(city);

const myBands: Array<string> = ["Metalica", "Less Than Jake", "Stone Sour"];
console.log(myBands);
const myMixedArray: Array<string | number | boolean> = [
  "Less Than Jake",
  25,
  true,
];
console.log(myMixedArray);

// using any type to allow for any type of value but should not be used as it defeats the purpose of typescript for example below
//const myAnyArray: any[] = ["Less Than Jake", 25, true];
//console.log(myAnyArray);

// Objects of all types
const myObject: {
  name: string;
  age: number;
  isStudent: boolean;
  location: string;
} = {
  name: "Nicky",
  age: 43,
  isStudent: true,
  location: "Fakenham",
};
console.log(myObject);

//function examples
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

function sayHello(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHello("Nicky"));

//void type for functions that do not return anything

function log(message: string): void {
  console.log(message);
}

log("This is a log message");
