// COUNTER EXERCISE

// Select the body element from index.html

// Set an attribute of 'style' to the body tag and add a background color of anything other than white

/* -------------------------------------------------------------------------- */

// Create an h1 element

// Append a new h1 element to the body element as a child

// Add text to the h1 element 

// Assign the background color of this element to something unique

// Set a new style attribute to the h1 element

// Add font size to the h1Element

// Set the default text to the number zero

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text

// Append the button element to the body element

// Add text to the boxButton

// Add a class attribute to boxButton

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text

// Add the button element to the body element

// Add text to the button element

// Add a class attribute of style to the button element

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value

// Create functionality that, when you click this button it decreases the h1 value


/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
document.body.style.backgroundColor = 'lightblue';

const h1Element = document.createElement('h1');
h1Element.textContent = '0';
h1Element.style.backgroundColor = 'forestgreen';
h1Element.style.fontSize = '5em';
document.body.appendChild(h1Element);

const lightRedBox = document.createElement('div');
lightRedBox.style.width = '450px';
lightRedBox.style.height = '70px'; 
lightRedBox.style.backgroundColor = 'forestgreen';
lightRedBox.style.position = 'absolute';
lightRedBox.style.right = '70px'; 
lightRedBox.style.top = '70px'; 
lightRedBox.style.color = 'white';
lightRedBox.style.display = 'flex';
lightRedBox.style.justifyContent = 'center';
lightRedBox.style.alignItems = 'center';
document.body.appendChild(lightRedBox);

const treesPlanted = document.createElement('span');
treesPlanted.textContent = 'trees planted';
treesPlanted.style.fontSize = '4.5em';
lightRedBox.appendChild(treesPlanted);

const incrementButton = document.createElement('button');
incrementButton.textContent = 'Increment';
incrementButton.classList.add('boxButton');
document.body.appendChild(incrementButton);

const decrementButton = document.createElement('button');
decrementButton.textContent = 'Decrement';
decrementButton.classList.add('style');
document.body.appendChild(decrementButton);

incrementButton.addEventListener('click', () => {
  let currentValue = parseInt(h1Element.textContent);
  h1Element.textContent = currentValue + 1;
});

decrementButton.addEventListener('click', () => {
  let currentValue = parseInt(h1Element.textContent);
  h1Element.textContent = currentValue - 1;
});



