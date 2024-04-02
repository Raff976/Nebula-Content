
// 1. Create an object for a celebrity and save it to a variable
let celebrity = {
    name: 'Johnny Depp',
    age: 58,
    occupation: 'Actor'
};

// 2. Using dot-notation add 3 key-value pairs to the celebrity
celebrity.profession = 'Actor';
celebrity.birthplace = 'Owensboro, Kentucky';
celebrity.movies = ['Pirates of the Caribbean', 'Edward Scissorhands'];

// 3. Using bracket-notation add 3 key-value pairs to the celebrity
celebrity['hairColor'] = 'Brown';
celebrity['height'] = '5 feet 10 inches';
celebrity['birthYear'] = 1963;

// 4. Write a function that allows us to add or update 3 properties
function addOrUpdateProperties(obj, key1, value1, key2, value2, key3, value3) {
    obj[key1] = value1;
    obj[key2] = value2;
    obj[key3] = value3;
}

// Example usage
let newCelebrity = {};
addOrUpdateProperties(newCelebrity, 'name', 'Johnny Depp', 'age', 58, 'occupation', 'Actor');

console.log(newCelebrity);

// 5. Using a loop - log all the celebrities properties to the console
for (let key in celebrity) {
    console.log(`${key}: ${celebrity[key]}`);
}

