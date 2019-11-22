// Array Destructuring
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0

// Object Destructuring

const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

const { firstname, lastname, country } = student;
console.log(firstname, lastname, country); // Glad Chinda Nigeria


let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
// Destructuring assignment to red and green
[red, green] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: 255, B: 50