const form = document.querySelector('.add-items');
const playersList = document.querySelector('.players');

const deleteBtn = document.querySelector('.delete-all');

const players = JSON.parse(localStorage.getItem('players')) || [];

function addPlayer(e){
    e.preventDefault();
    const input = this.querySelector('input[name=player]');
    const player = {
        text: input.value,
        done: false
    }

    players.push(player);
    populateList(players, playersList);
    localStorage.setItem('players', JSON.stringify(players));
    this.reset();
}

function populateList(players=[], playersList){
    playersList.innerHTML = players.map((player, i) => {
        return `
        <li class="player">
            <input type="checkbox" data-index=${i} id="item${i}" ${player.done ? 'checked' : ''}/>
            <label for="item${i}">${player.text}</label>
        </li>
        `;
    }).join('');

    if(players.length===0){
        deleteBtn.style.display = 'none';
    } else {
        deleteBtn.style.display = '';
    }
}

function toggleDone(e){
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    players[index].done = !players[index].done;

    localStorage.setItem('players', JSON.stringify(players));
    populateList(players, playersList);
}

function deleteAll(){
    const allPlayers = document.querySelectorAll('.player');
    allPlayers.forEach(player => {
        player.remove();
    })
    players.splice(0, players.length);
    localStorage.removeItem('players');

    if(players.length===0){
        deleteBtn.style.display = 'none';
    } else {
        deleteBtn.style.display = '';
    }
}




form.addEventListener('submit', addPlayer);
playersList.addEventListener('click', toggleDone);

deleteBtn.addEventListener('click', deleteAll);

populateList(players, playersList);

