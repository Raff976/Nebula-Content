const noCaps = 'This Should Not Have Capital Letters!';
const lettersLowerCase = noCaps.toLowerCase();
console.log(lettersLowerCase);

const loud = "i'm very loud!";
const loudUpperCase = loud.toUpperCase();
console.log(loudUpperCase);

console.log(`${loudUpperCase}${lettersLowerCase}`);

const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
const namesArray = stringOfNames.split(' ');
console.log(namesArray);

const fName = "John";
const hobby = "hike";
const greeting = `Hi my name is ${fName} and I like to ${hobby}.`;
console.log(greeting);

const ironMan = "Tony Stark";
const initials = ironMan.split(' ').map(name => name[0]).join('');
console.log(initials);

const allStar = string.slice(23, 32);
console.log(allStar);

const questionMark = string1.slice(-1);
console.log(questionMark);




// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';


// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!';

