let family = {
    familyName: "Brzenczyszczykiewicz",
    members: [
        {
            name: "Will",
            age: 35,
            relation: "Father"
        },
        {
            name: "Jane",
            age: 32,
            relation: "Mother"
        },
        {
            name: "Johnny",
            age: 7,
            relation: "Son"
        },
        {
            name: "Stephanie",
            age: 5,
            relation: "Daughter"
        },
        {
            name: "Oak",
            age: 4,
            relation: "Pet"
        }
    ]
};

console.log("Family Name: " + family.familyName);
console.log("Members:");

family.members.forEach(member => {
    console.log("Name: " + member.name + ", Age: " + member.age + ", Relation: " + member.relation);
});
