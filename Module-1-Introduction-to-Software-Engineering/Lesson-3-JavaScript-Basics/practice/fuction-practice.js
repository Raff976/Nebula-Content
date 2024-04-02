// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.

function multiplyBy10(number) {

    return number * 10;
  
}
  console.log(multiplyBy10(337));
  






//Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.

let defineword = "Saygoodbye";
let otherword = "Farewellsaucebootle";

console.log(defineword);
console.log(otherword);






//Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array(Hint: you can use the modulus operator to check whether a number is even or not).


let evenNumbers = "newarray"

console.log (evenNumbers)

function evenNumbers(array) {
    let newArray = []; // Create a new array to store the even numbers
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]); // If the number is even, add it to the new array
      }
    }
    return newArray; // Return the new array with even numbers
  }
  
  // Example usage
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = evenNumbers(numbers);
  console.log(result);
  


//Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.