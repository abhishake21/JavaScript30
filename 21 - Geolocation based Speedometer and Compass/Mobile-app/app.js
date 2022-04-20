const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const alpha = document.querySelector("#alpha");
const beta = document.querySelector("#beta");
const gamma = document.querySelector("#gamma");

const fixed = 2;

navigator.geolocation.watchPosition((data) => {
    console.log(data);
}, (err) => {
    console.error(err);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
});

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
}

function deviceOrientationHandler(evt) {
    try {
        alpha.innerText = evt.alpha.toFixed(fixed);
        beta.innerText = evt.beta.toFixed(fixed);
        gamma.innerText = evt.gamma.toFixed(fixed);
        arrow.style.transform = `rotate(${evt.alpha}deg) rotate3d(1,0,0, ${evt.gamma * -1}deg)`;
    } catch (err) {
        console.error(err);
    }
}