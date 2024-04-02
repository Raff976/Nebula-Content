// 1. Given an array of strings
// // Loop over the array of strings
// // And loop over each string.
// // If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel'];

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < names[i].length; j++) {
    if (names[i][j].toLowerCase() === 'a') {
      console.log(names[i]);
      break;
    }
  }
}


// 2. Given an array of strings
// // Loop over the array
// // And loop over each string.
// // Create a new array of strings where every other letter in each string is capitalized 
// // // Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
    const StringArray = ['This','is','an','array','of','strings']
    const newAray =[]
for (let i = 0; i < StringArray.length; i++){
    let newworld = ``
    const curent
const currentword = StringArray [i]
const upperLetter = Letter.toLowerCase()
const lowerLetter = letter.toLowerCase
if(j % 2 ===0){
console.log(upperLetter);
}else{
}
console.log(lowerLetter)
}
newAray.push(newworld)
// 3. Given an array of arrays of numbers (nested array)
// // Add all the inner values up and push them into a single array
// // // Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
    const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
    const arrayOfTotals=[ ]

    for(let i = 0; i < arrayOfArrays.legth; i++){
    const innerArray = arrayOfArrays[i]
    let total = 0 
    for(let j = 0; j < innerArray.legth; j++){
        const currentNum = innerArray[j 
        total += curentNum 
    } 
arrayOfTotals.push(total)]
    }