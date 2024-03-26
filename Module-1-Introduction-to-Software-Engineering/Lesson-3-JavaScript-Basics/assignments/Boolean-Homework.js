//1. Write a statement that checks if 2 and 'two' are equal
console.log(2 == 'two')

//2. Write a statement that checks if '2' and 2 are loosely equal
console.log('2' == 2)

//3. Write a statement that checks if 14 and '14' are strictly equal
console.log(14 === '14')

//4. Write a statement that checks if 10 is greater than -100
console.log(10 > -100)

//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
console.log(4 === Math.round(4.4))

//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
console.log(10 >= Math.ceil(9.1))

//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
console.log(10 > 2 && 3 > 4)
//7.a Without changing any of the numbers, or their order. How do we make this print true?
console.log(10 > 2 && !(3 > 4))


//8. Pick a number between 1-20 and assign it to a variable
// // This is the number of watermelons you purchased.
// // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
// // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
// // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
// // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
// // If your number of watermelons is more than 15, print, 'Did you have a coupon?'
//8. Pick a number between 1-20 and assign it to a variable
let numOfWM = 7
if(numOfWM === 1 || numOfWM ===  2) {
  console.log('Looks like you like watermelon')
} else if (numOfWM > 2 && numOfWM <= 5) {
  console.log('Thats a lot of watermelon')
} else if (numOfWM > 5 && numOfWM <= 10){
  console.log('Thats too many watermelon!')
} else if (numOfWM > 10 && numOfWM <= 15) {
  console.log('You must be CRAZY for watermelon!')
} else {
  console.log('Did you have a coupon?')
}

//9. Create a variable that represents your current hunger on a level of 1-10
let hungerLevel = 7
console.log(hungerLevel > 6 ? 'Time to eat!' : "I'm not hungry")

//10. Think of an Magic-8 Ball
let question = "Will I win the lottery?"
let randomAnswer = Math.floor(Math.random() * 5) + 1
let answer
switch(randomAnswer) {
  case 1:
    answer = "It is certain."
    break;
  case 2:
    answer = "It is decidedly so."
    break;
  case 3:
    answer = "Without a doubt."
    break;
  case 4:
    answer = "Not likely."
    break;
  case 5:
    answer = "Very doubtful."
    break;
  default:
    answer = "Reply hazy, try again."
}
console.log(question.replace("I", "you") + " " + answer)
