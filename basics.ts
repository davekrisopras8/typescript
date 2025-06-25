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

let person: {
  name: string;
  age: number;
};
person = {
  name: "Dave",
  age: 17,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference
let job = 'Tech Lead'
// job = 12345

// Union Types
let you: string | number = 'Dave Krisopras Essanto'
