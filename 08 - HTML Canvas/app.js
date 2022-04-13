const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

const strokeWidth = document.querySelector('input[type=range]');
const strokeColor = document.querySelector('input[type=color]');
const crazyMode = document.querySelector('input[type=checkbox]');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-160;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;

function draw(e){
    if(!isDrawing) return;
    
    if(crazyMode.checked) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    } else {
        ctx.strokeStyle = strokeColor.value;
    }
    
    ctx.lineWidth = strokeWidth.value;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if (hue>=360) {
        hue=0;
    }
}


canvas.addEventListener('mousedown', (e)=> {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('touchmove', draw)
canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout', ()=> isDrawing = false)