const input = document.querySelector('input[type=text]');
const form = document.querySelector('.add-items');
const playersList = document.querySelector('.players')

function addPlayer(e){
    e.preventDefault();
    let output = `
    <div class="player">
        <img class="logo" src="https://img.icons8.com/emoji/48/000000/soccer-ball-emoji.png"/>
        <li>${input.value}</li>
    </div>
    `
    playersList.innerHTML += output;
    input.value = '';
}

form.addEventListener('submit', addPlayer)