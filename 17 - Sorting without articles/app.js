const bands = ['The Plot in You', 'The Devil Wears Prada', 'Arctic Monkeys', 'Queens of the Stone Age', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Dark Stares', 'Royal Blood', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBandNames = bands.sort((a,b) => strip(a) > strip(b) ? 1:-1);

const bandList = document.querySelector('.bands');
let output = sortedBandNames.map(band => `
<li class="band-name">${band}</li>
`).join('');


bandList.innerHTML = output;