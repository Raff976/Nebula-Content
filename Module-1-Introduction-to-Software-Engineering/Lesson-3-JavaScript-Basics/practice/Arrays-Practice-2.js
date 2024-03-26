/// Change the element at index zero to equal itself times 10 
let numArr = [1, 2, 3, 4, 5];
numArr[0] *= 10;
console.log(numArr);

// Add an additional element to the prior array
numArr.push(6);
console.log(numArr);

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
let removedItem = numArr.pop();

// Check if the prior array contains the number 1
// If it does, log true, if it doesn't, log false
if (numArr.indexOf(1) >= 0) {
    console.log(true);
} else {
    console.log(false);
}

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
let removedFirstItem = numArr.shift();
console.log(removedFirstItem);
console.log(numArr);

// Add that item back
numArr.unshift(removedFirstItem);
console.log(numArr);

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort();
console.log(sortThis);

// Now reverse the prior array
sortThis.reverse();
console.log(sortThis);

// Write a string stating your favorite 3 foods. 
// Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
let favoriteFoods = "My favorite foods are vanilla ice cream, pizza, and chocolate mousse.";
console.log(favoriteFoods);

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
// Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
let strArr = favoriteFoods.split(/\W+/).filter(Boolean);
console.log(strArr);

// Convert the output from the prior example back into a string, but with dashes between the words. 
// Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
let strDashes = strArr.join('-');
console.log(strDashes);

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
arr.splice(5, 0, 6);
console.log(arr);

// Create two arrays and, using JavaScript, join them together
let arr1 = ["dog", "cat", "bird"];
let arr2 = ["whale", "shark", "seal"];
let animals = arr1.concat(arr2);
console.log(animals);

// Create a multi-dimensional array
let multi = [[1, 2, 3], [4, 5, 6], ["cat", "dog"]]



