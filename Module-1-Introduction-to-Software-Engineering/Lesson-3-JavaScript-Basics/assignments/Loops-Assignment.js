// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// Each loop it should log to the console 'the current index is _'
for (let i = 0; i < 30; i++) {
    console.log(`the current index is ${i}`);
}

// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// Each loop it should log to the console the current index
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// 3. Create an array with your top 5 celebrity names in it.
// Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// Loop over the array and log each celebrity's full name to the console.
const celebrities = ['Brad Pitt', 'Angelina Jolie', 'Leonardo DiCaprio', 'Jennifer Lawrence', 'Tom Cruise'];
for (let i = 0; i < celebrities.length; i++) {
    console.log(celebrities[i]);
}

// 4. Loop over your celebrity list and
// If a celebrity's full name has an even number of characters log it to the console
for (let i = 0; i < celebrities.length; i++) {
    if (celebrities[i].length % 2 === 0) {
        console.log(celebrities[i]);
    }
}

// 5. Use the celebrity array for this question
// Create a for loop which will iterate over each element and output a new array of only first names
const firstNames = [];
for (let i = 0; i < celebrities.length; i++) {
    const fullName = celebrities[i];
    const firstName = fullName.split(' ')[0];
    firstNames.push(firstName);
}
console.log(firstNames);

// 6. Use the celebrity array for this question
// Create a for loop which will iterate over each element and output a new array of only last names
const lastNames = [];
for (let i = 0; i < celebrities.length; i++) {
    const fullName = celebrities[i];
    const lastName = fullName.split(' ')[1];
    lastNames.push(lastName);
}
console.log(lastNames);

// 7. Loop over the celebrity list and then loop through each name.
// If a letter is a vowel, log it to the console
for (let i = 0; i < celebrities.length; i++) {
    const fullName = celebrities[i];
    for (let j = 0; j < fullName.length; j++) {
        const letter = fullName[j].toLowerCase();
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            console.log(letter);
        }
    }
}

// 8. Loop over the celebrity list and then loop through each name.
// If a letter is uppercase, log it to the console
for (let i = 0; i < celebrities.length; i++) {
    const fullName = celebrities[i];
    for (let j = 0; j < fullName.length; j++) {
        const letter = fullName[j];
        if (letter === letter.toUpperCase() && letter !== ' ') {
            console.log(letter);
        }
    }
}

// 9. Convert your celebrity array to all caps and no spaces:
// Input:  ['Martha Stewart', 'David Beckham', etc..]
// Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const allCaps = celebrities.map(name => name.toUpperCase().replace(' ', '-'));
console.log(allCaps);

// 10. Index your array to find your favorite celebrity.
// Save that name to a variable
// Loop over the array until you find that individual
// Log that name to the console and break out of the loop
const favoriteCelebrity = 'Leonardo DiCaprio';
let found = false;
for (let i = 0; i < celebrities.length; i++) {
    if (celebrities[i] === favoriteCelebrity) {
        console.log(`Found favorite celebrity: ${favoriteCelebrity}`);
        found = true;
        break;
    }
}
if (!found) {
    console.log(`${favoriteCelebrity} not found in the list.`);
}



//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
