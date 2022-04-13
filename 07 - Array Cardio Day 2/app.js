const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const atleast19 = people.some(person => (new Date().getFullYear())-person.year >= 19);
console.log(atleast19);

const all19 = people.every(person => (new Date().getFullYear())-person.year >= 19);
console.log(all19);



const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
console.table(comments);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findID = comments.find(comm => comm.id === 823423);
console.log(findID);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndex = comments.findIndex(comm => comm.id === 823423);
console.log(findIndex);

comments.splice(findIndex, 1)
console.table(comments);