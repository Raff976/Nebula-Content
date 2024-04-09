// Q1: Attach this document to the index.html
const newDoc = document.implementation.createHTMLDocument("New Document");
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";
newDoc.body.appendChild(newDiv);
document.body.appendChild(newDoc.documentElement.cloneNode(true));

// Q2: Grab the second element that has the text Hello
const helloElements = document.querySelectorAll('div');
const secondHelloElement = helloElements[1];
console.log(secondHelloElement);

// Q3: Grab the text in the h1 that says 'Good Afternoon'
const goodAfternoonText = document.querySelector('h1').textContent;
console.log(goodAfternoonText);

// Q4: Grab the h1 with the text that says "Catch me if you can"
const catchMeHeader = document.querySelector('h1:last-of-type');
console.log(catchMeHeader);

// Q5: Grab the span element and change the text to "Got ya"
const spanElement = document.querySelector('span');
spanElement.textContent = 'Got ya';
