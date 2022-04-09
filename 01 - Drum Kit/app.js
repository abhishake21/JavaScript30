function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSound);

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}



// For Touch devices

const divA = document.querySelector('#A');
const divS = document.querySelector('#S');
const divD = document.querySelector('#D');
const divF = document.querySelector('#F');
const divG = document.querySelector('#G');
const divH = document.querySelector('#H');
const divJ = document.querySelector('#J');
const divK = document.querySelector('#K');
const divL = document.querySelector('#L');


divA.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="65"]');
    audio.currentTime = 0;
    divA.classList.add('playing');
    audio.play();
});
divS.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="83"]');
    audio.currentTime = 0;
    divS.classList.add('playing');
    audio.play();
});
divD.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="68"]');
    audio.currentTime = 0;
    divD.classList.add('playing');
    audio.play();
});
divF.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="70"]');
    audio.currentTime = 0;
    divF.classList.add('playing');
    audio.play();
});
divG.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="71"]');
    audio.currentTime = 0;
    divG.classList.add('playing');
    audio.play();
});
divH.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="72"]');
    audio.currentTime = 0;
    divH.classList.add('playing');
    audio.play();
});
divJ.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="74"]');
    audio.currentTime = 0;
    divJ.classList.add('playing');
    audio.play();
});
divK.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="75"]');
    audio.currentTime = 0;
    divK.classList.add('playing');
    audio.play();
});
divL.addEventListener('click', ()=>{
    const audio = document.querySelector('audio[data-key="76"]');
    audio.currentTime = 0;
    divL.classList.add('playing');
    audio.play();
});