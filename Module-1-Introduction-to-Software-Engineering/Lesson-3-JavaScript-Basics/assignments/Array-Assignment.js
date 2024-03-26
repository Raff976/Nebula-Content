// 1. Create an array that contains two of your favorite things to do
let favoriteThings = ['skiing', 'cooking']
console.log (favoriteThings)

// 2. Using an array method, add another thing you like to do to that list
favoriteThings.push('hiking')
console.log (favoriteThings)
// 3. Reverse the order of the array
favoriteThings.reverse()

// Use this array for questions 4-11:
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 4. Log the length of the array
console.log(daysOfWeek.length)

// 5. Log the 4th element in the array
console.log(daysOfWeek[3])

// 6. Remove the first element in the array. Log the new array and the element removed from the array
let removedDay = daysOfWeek.shift()
console.log(daysOfWeek)
console.log('Removed day:', removedDay)

// 7. Put 'Sunday' back at the beginning of the array and log the new array
daysOfWeek.unshift('Sunday')
console.log(daysOfWeek)

// 8. Remove the last element in the array. Log the new array and log the element removed
let lastDay = daysOfWeek.pop()
console.log(daysOfWeek)
console.log('Removed day:', lastDay)

// 9. Add 'Saturday' back to the end of the array and log the new array
daysOfWeek.push('Saturday')
console.log(daysOfWeek)

// 10. Replace 'Thursday' with 'Friday Junior'
let index = daysOfWeek.indexOf('Thursday')
daysOfWeek[index] = 'Friday Junior'
console.log(daysOfWeek)

// 11. Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let daysOfWeekFAV  = daysOfWeek[6]
console.log(`My favorite day of the week is ${daysOfWeekFAV},`)

// 12. Combine these two arrays
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
let combinedArray = phone.concat(laptop)
console.log(combinedArray);

// 13. Write a line of code to test if something is an array or not
let testArray = [1, 2, 3]
console.log(Array.isArray(testArray))
