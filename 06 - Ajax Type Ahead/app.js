const input = document.querySelector('.search');
const listCityState = document.querySelector('.list-city-state');

const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"


// Searching
const searchCityState = async (searchText) => {
    const res = await fetch(url);
    const data = await res.json();

    let matches = data.filter(place => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return place.city.match(regex) || place.state.match(regex)
    })

    if (searchText.length === 0) {
        matches = [];
        listCityState.innerHTML = '';
    }

    outputHTML(matches);
}


// getting commas in numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


// Display Matches
const outputHTML = (matches) => {
    if (matches.length > 0) {
        const output = matches.map(place => {
            return `
            <li class="rounded-3">
                <span class="name city-state">${place.city}, ${place.state}</span>
                <div class="population">
                    <span class="divider"></span>
                    <span class="name">${numberWithCommas(place.population)}</span>
                </div>
            </li>
            `
        }).join('')
        listCityState.innerHTML = output;
    }
}


input.addEventListener('input', () => searchCityState(input.value))


