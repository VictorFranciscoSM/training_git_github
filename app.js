"Cambio a 30 como maximo"
function changeMaxTo30() {
    const inputElement = document.getElementById('myInput');
    inputElement.max = 30;
}

function changeMaxTo50() {
    const inputElement = document.getElementById('myInput');
    inputElement.max = 50;
}

document.getElementById('changeTo30').addEventListener('click', changeMaxTo30);
document.getElementById('changeTo50').addEventListener('click', changeMaxTo50);