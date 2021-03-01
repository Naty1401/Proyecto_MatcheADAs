const help = document.getElementById('help');
const reset = document.getElementById('reset');

help.addEventListener('click',bienvenida)

reset.addEventListener('click', ()=>{
    swal({
        title: "Reiniciar juego?",
        text: "Perderás todo tu puntaje acumulado",
        buttons: {
            cancel: true,
            roll: {
                text: "Nuevo juego",
                value: "roll",
            },
        },
    });
})



let width = 0


window.onload = bienvenida();

const grid = document.querySelector('.grid')
const cuadricula = []





const ball = ['⚽', '🥎', '🏀', '🏐', '🏈', '\uD83C\uDFBE']

function generarGrilla(width) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    //grid.innerHTML = "";
    for (let f=0; f < width; f++){
        for (let c=0; c < width; c++){
        const celda = document.createElement('div')
        celda.setAttribute('id','f' + f + '_c' + c);
        
        celda.dataset.fila = f;
        celda.dataset.columnas = c;

        let randomBall = ball[Math.floor(Math.random() * ball.length)]
        //celda.style.backgroundColor = colores[randomColor]
        celda.style.width = `${560/width}px`
        celda.style.height = `${560/width}px`
        
        celda.innerHTML = randomBall;
        grid.appendChild(celda)
        cuadricula.push(celda)
        twemoji.parse(document.body);
    }
}
}