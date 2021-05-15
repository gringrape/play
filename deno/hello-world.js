import { multiply, add } from './calculator.js';

function capitalize(name) {
  return name[0] + name.slice(1);
}

function hello(name) {
  return "Hello, " + capitalize(name);
}

console.log(hello("Jin"));
console.log("5 + 3 = ", add(5, 3));
console.log("100 * 20 = ", multiply(100, 20));
