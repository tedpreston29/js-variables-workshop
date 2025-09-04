console.log("Hello World!");

let number = 1;
console.log(number);

let mints = 15;
let chocolates = 32;
let sweets = mints + chocolates;
console.log(sweets);

/* Join strings together with the + operator. */
let firstName = "Ted";
let lastName = "Preston";
let fullName = firstName + " " + lastName;
console.log(fullName);

/* string literals - (make sure to use back ticks ````` that way it wont interfere with either " or ')     */

let favouriteBand = "Kings of Leon";
let favouriteSong = "King of the Rodeo";
let bandSong = `${favouriteBand} ${favouriteSong}`;
console.log(bandSong);
/* string literals are also easier to read for me and anyone else reading the code. THEY ARE NEATER */

/* can find out the length, or number of characters in a string by using it’s length property, accessed using a dot (example below) */

let petsName = "Digby";
console.log(`${petsName} is ${petsName.length} characters long`);

/* You can use the typeof operator to find out what type of data a variable contains. You might use this to check if you have the correct type of information. A number you can add, or a string you can concatenate. (example below) */

let food = "Carrot";
console.log(typeof food);

let numeral = 69;
console.log("The type of numeral is " + typeof number); // Output: The type of number is number

let isTrue = true;
console.log(`The type of isTrue is ${typeof isTrue}`); // Output: The type of isTrue is boolean

/* undefined and null are special values in JavaScript. They’re used to represent the absence of a value. */

/*undefined is used when a variable has been declared, but not assigned a value. You shouldn’t deliberately set something to undefined.*/

/* null is used when a variable is deliberately left blank. It’s a way to say “this variable intentionally empty”. It’s useful for clearing any value that you might not want to keep anymore. (EXAMPLES FOR NULL AND UNDEFINED ARE BELOW) */

let typeofCheese;
console.log(typeofCheese); // Output: undefined

let age = null;
console.log(age); // Output: null

/* check out the Moodle page JS: primitive Data Types, for more info on this. there is also some bits to do with > greater than and < less than. Ted I will put the example in this page of code but check it out again to gain more understanding */
let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false
