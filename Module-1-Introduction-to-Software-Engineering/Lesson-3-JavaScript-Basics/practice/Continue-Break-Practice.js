// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'
let str = "example string";

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') {
    console.log('a')
    break
  }
}



// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'
let arr = ['a', 'b', 'c', 100, 'e'];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    console.log(`at index ${i} there is the number ${arr[i]}`)
    break
  }
}



// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console
let mixedArray = [1, 'apple', 2, 'banana', 3, 'orange'];
let newArray = [];

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === 'number') {
    continue 
    
  }
  newArray.push(mixedArray[i]);
}

console.log(newArray)
