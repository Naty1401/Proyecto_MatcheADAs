const help = document.getElementById('help'); //icono de informacion
const reset = document.getElementById('reset'); //icono de reset
const grid = document.querySelector('.grid') //grilla

help.addEventListener('click',bienvenida);
reset.addEventListener('click',reiniciar);

let width = 0

window.onload = bienvenida();

let cuadricula = []
const ball = ['⚽', '🥎', '🏀', '🏐', '🏈', '\uD83C\uDFBE']

const obtenerRandom = () => ball[Math.floor(Math.random() * ball.length)]


let seconds
let llamarModal = true
let dificultad = 0

const generarGrilla = (width) => {
    seconds = 100
    cuadricula = []
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let f=0; f < width; f++){
        cuadricula[f] = []
        for (let c=0; c < width; c++){
            cuadricula[f][c] = obtenerRandom()
            const celda = document.createElement('div')
        celda.setAttribute('id','f' + f + '_c' + c);
        
        celda.dataset.fila = f;
        celda.dataset.columnas = c;

        celda.style.width = `${560/width}px`
        celda.style.height = `${560/width}px`
        celda.addEventListener('click', selecionarBall);
        celda.innerHTML = cuadricula[f][c];
        grid.appendChild(celda)
        console.log(cuadricula)
    
        //cuadricula.push(celda)
        //console.log(cuadricula.push(celda))
        twemoji.parse(document.body);
    }
}
startTimer = setInterval(time, 1000);
dificultad = width
return dificultad
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

////////////////////////////////buscar bloque
const buscarBloqueHorizontal = () => {
    for (let i = 0; i < cuadricula.length; i++) {
        for (let j = 0; j < cuadricula[i].length; j++) {
            console.log(cuadricula[i][j])
            if(cuadricula[i][j] === cuadricula[i][j+1] && cuadricula[i][j] === cuadricula[i][j+2]){
                console.log('hay igules')
                return
            }
        }
        
    }
    return false
}


const selecionarBall = () =>{

}

