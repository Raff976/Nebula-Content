// 1. Write a function that takes in 1 number and returns that number + 1
function addOne(number){
return number + 1; 

}

const result = addOne(1);
console.log(result);



// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.

function sayGoodnigth(name){
    return `Goodnight, ${name}!`;

}
const name = "school";
console.log(sayGoodnigth(name));


// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
const checkForZeroAndLogHelloWorld = (arr) => {
    if (arr.includes(0)) {
      console.log('This array has the number zero in it'); 
    }
  }
  
  // 4. Write a function that console logs 'hello world' 10 times to the console.
  const logHelloWorld = () => {
    for (let i = 0; i < 10; i++) {
      console.log('hello everyone');
    }
  }
  
  // 5. Write the prior function utilizing a 'fat arrow' function
  const checkForZero = (arr) => {
    let hasZero = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        hasZero = true;
        break;
      }
    }
    if (hasZero) {
      for (let i = 0; i < 10; i++) {
        console.log('hello everyone');
      }
    }
  }
  checkForZero([1, 2, 0]);

  