// start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;

console.log(age1, age2);

age1 = 500;
console.log(age1, age2);

let name1 = 'abhishek';
let name2 =  name1;
console.log(name1, name2);

name1 = 'amit';
console.log(name1, name2);

console.clear();


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.table(players, team);

// You might think we can just do something like this:
// team[3] = 'Abhi';
// console.table(players, team);


// however what happens when we update that array?


// now here is the problem!


// oh no - we have edited the original array too!


// Why? It's because that is an array reference, not an array copy. They both point to the same array!


// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
console.log(team2);
team2[3] = 'Abhi'
console.log(team2);
console.log(players);

// one way


// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

// or Array from method
const team5 = Array.from(players);

// now when we update it, the original one isn't changed

console.clear();

// The same thing goes for objects, let's say we have a person object


// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.age = 20;

// console.log(captain);
// console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {age:20, number:101});
console.log(captain2);
console.log(person);

console.clear()

// We will hopefully soon see the object ...spread
const captain3 = {...person};
console.log(captain3);
captain3.age = 23;
console.log(captain3);
console.log(person);


// Things to note - this is only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
const myInfo = {
    name: 'Abhishek',
    age: 23,
    socials: {
        twitter: '@abhishake21',
        facebook: ''
    }
}

console.clear();
console.log(myInfo);

const dev1 = Object.assign({}, myInfo)
console.log(dev1);

dev1.socials.twitter = '@qweqwe';

console.log(myInfo);
console.log(dev1);

// 

console.clear();

const dev2 = JSON.parse(JSON.stringify(myInfo));
console.log(dev2);

dev2.socials.twitter = '@coolman';

console.log(myInfo);
console.log(dev2);

