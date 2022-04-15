const pressedKeys = [];
const code = 'abhi'

window.addEventListener('keyup', (e)=>{
    pressedKeys.push(e.key);
    pressedKeys.splice(-code.length-1, pressedKeys.length-code.length);
    
    if (pressedKeys.join('').includes(code)) {
        document.body.style.backgroundImage = "url('https://i.giphy.com/media/WoD6JZnwap6s8/giphy.webp')";
        document.querySelector('header').style.display = 'none'
        cornify_add();
    }
});