console.log ("myfirstlog")

let moose = {
    name: "Mike",
    age: 15,
    weight: 500, // in kilograms
    eat: function(food) {
        if (food === "grass") {
            this.weight += 5; // Assume 5 kg gained by eating grass
            return `${this.name} ate some grass and gained weight. He now weighs ${this.weight} kg.`;
        } else {
            return `${this.name} doesn't eat ${food}.`;
        }
    }
};

console.log(moose.eat("grass")); 
console.log(moose.eat("leaves")); 


function addPropertyToObject(obj, propName, propValue) {
    obj[propName] = propValue;
}

let Moose = {
    name: "Mike",
    age: 15,
    weight: 500 // in kilograms
};

addPropertyToObject(moose, "color", "brown");

console.log(moose);





