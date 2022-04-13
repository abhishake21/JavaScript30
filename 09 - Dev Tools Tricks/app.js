const para = document.querySelector('p');
para.addEventListener('click', ()=>{
    para.style.color = 'limegreen';
    para.style.fontSize = '2rem';
})

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];


// Regular
console.log('Hello World');


// Interpolated
console.log('Hello i love %s','⚽');
let sport = '⚽';
console.log(`Hello i love ${sport}`);


// Styled
console.log('%c Hello World','font-size:20px; background:green');


// warning!
console.warn('⚠ Your Code is Shit ⚠')


// Error :|
console.error('⚠ Your Code is Shit ⚠')


// Info
console.info('I think the problem with your code is that its Shit.')


// Testing
console.assert(1===1, 'This is Wrong')
console.assert(1===2, 'This is Wrong')
console.assert(para.classList.contains('Woah'), 'Para doesnt contain the class "Woah"')


// clearing
console.clear()


// Viewing DOM Elements
console.log(para);
console.dir(para);


// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})


// counting
console.count('Abhishek')
console.count('Abhishek')
console.count('Football')
console.count('Football')
console.count('Football')
console.count('Abhishek')
console.count('Abhishek')
console.count('Football')
console.count('Football')
console.count('Abhishek')
console.count('Football')
console.count('Football')



console.clear()
// timing
console.time('Time to fetch data - ');
fetch('https://api.github.com/users/abhishake21')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.timeEnd('Time to fetch data - ');
    })




