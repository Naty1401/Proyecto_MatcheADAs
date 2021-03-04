const help = document.getElementById('help'); //icono de informacion
const reset = document.getElementById('reset'); //icono de reset
const grid = document.querySelector('.grid') //grilla

help.addEventListener('click',bienvenida);
reset.addEventListener('click',reiniciar);

let width = 0

window.onload = bienvenida();

const cuadricula = []
const ball = ['⚽', '🥎', '🏀', '🏐', '🏈', '\uD83C\uDFBE']

let seconds

function generarGrilla(width) {
    seconds = 5
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let f=0; f < width; f++){
        for (let c=0; c < width; c++){
        const celda = document.createElement('div')
        celda.setAttribute('id','f' + f + '_c' + c);        
        celda.dataset.fila = f;
        celda.dataset.columnas = c;
        let randomBall = ball[Math.floor(Math.random() * ball.length)]
        celda.style.width = `${560/width}px`
        celda.style.height = `${560/width}px`        
        celda.innerHTML = randomBall;
        grid.appendChild(celda)
        cuadricula.push(celda)
        twemoji.parse(document.body);
        }
    }
    startTimer = setInterval(time, 1000);
    return
};


const timer = document.getElementById('timer');

const time = () => {
    
    if(seconds >= 0){
        timer.innerHTML = seconds
        seconds--
    }
    else{
        gameOver()
    }
}

const stopTimer = () => {
    clearInterval(startTimer);
}