// const listItem = document.querySelectorAll('list-item');
const checkBox = document.querySelectorAll('input[type=checkbox]');

checkBox.forEach(box => {
    box.addEventListener('click', handleCheck)
})

let lastChecked;

function handleCheck(e){
    // Checking ctrl and checked
    let inBetween = false;

    if (e.ctrlKey && this.checked) {
        checkBox.forEach(box => {
            if(box===this || box===lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                box.checked = true;
            }
        })
    }
    lastChecked = this
}