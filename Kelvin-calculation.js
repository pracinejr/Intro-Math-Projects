var a = 'Node REPL is fun'; // this is random

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// These are two different mini projects

// Kelvin is base level temp. Will manipulate.
const Kelvin = 300
// celsius is 273 degrees less than Kelvin.
const celsius = Kelvin - 273

console.log(celsius);
// Fahrenheit's equation is listed above.
let fahrenheit = celsius * (9 / 5) + 32;
// Round fahrenheit's calc. down to nearest integer
fahrenheit = Math.floor(fahrenheit);
// Log current temp in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);