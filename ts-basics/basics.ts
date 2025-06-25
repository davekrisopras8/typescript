// Primitive: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitive
let age: number;
age = 12;

let userName: string;
userName = "Dave";

let founderAndSoftwareEngineer: boolean;
founderAndSoftwareEngineer = true;

// More complex types
let hobbies: string[];
hobbies = ["Coding", "Sports"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Dave",
  age: 17,
};

let people: Person[];

// Type inference
let job = "Tech Lead";
// job = 12345

// Union Types
let you: string | number = "Dave Krisopras Essanto";

// Functions and Types
function add(a: number, b: number) {
  return a + b
}

function print(value: any) {
  console.log(value)
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
// updatedArray[0].split('')
