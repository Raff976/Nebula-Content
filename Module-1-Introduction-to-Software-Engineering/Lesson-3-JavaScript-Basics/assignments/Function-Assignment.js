// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]

const addOneToArray = (numbers) => {
    let newArray = []
    for (let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i] + 1)
    }
    return newArray
}

console.log(addOneToArray([1, 2, 3]))

// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false

function hasLetter(string, letter) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            return true
        }
    }
    return false
}


console.log(hasLetter('dog', 'g'))

// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]

const flName = (array) => {
    const firstName = []

    for (let i = 0; i < array.length; i++) {
        const currentName = array[i];
        const toArray = currentName.split(" ")

        firstName.push(toArray[0])
    }

    return firstName
}

const nameList = ["Hashem Cruz", "Elohim Cruz", "Carina Torres", "Victoria Serans"]

console.log(flName(nameList));


// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"

function sayGreeting(name, greeting){
    return `${greeting}, ${name}`
}

console.log(sayGreeting("John","Happy Easter"))

// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23


function calculateAge(currentYear, birthYear){
   return currentYear - birthYear
 }

 console.log(calculateAge(2024,2015))



function calculateAge(birthYear){
    let date = new Date()
    const currentYear = date.getFullYear()
    return currentYear - birthYear
}

console.log(calculateAge(2000))