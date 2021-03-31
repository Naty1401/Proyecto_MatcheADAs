const bienvenida = () => {
    swal({
        title: '¡Bienvenida!',
        text: `En MatcheADAs tu objetivo es juntar 3 o mas items del mismo tipo, ya sea en fila o en columna. Para eso selecciona un ítem y a continuación un ítem adyaceente para intercambiarlos de lugar. 
        
        Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o mas hasta que se acabe el tiempo! 
        
        Controles`,
        button: "A Jugar " ,
    })
    .then((x) => {
        if (llamarModal) {
            niveles();
            return llamarModal = false;
        } else if (!llamarModal){
          //timer(pause);
        }
    });
    //stopTimer()
} ;

const niveles = () => {
    swal("Nuevo Juego", "Selecciona una dificultad", {
        buttons:{
            facil:{
                text: "Facil",
                value: "facil"
            },
            medio:{
                text: "Medio",
                value: "medio"
            },
            dificil:{
                text: "Dificil",
                value: "dificil"
            }
        }
    })
    
    .then((value) =>{
        switch (value) {
            case "facil":
                generarGrilla(9)
                //document.documentElement.style.setProperty('--width', '630px');
                //grid.style.width = "630px"
                //grid.style.height = "630px"    
                break;
    
            case "medio":
                generarGrilla(8)
                break;
    
            case "dificil":
                generarGrilla(7)
                // grid.style.width = "490px"
                // grid.style.height = "490px"
                break;
        }
    })
    }

const reiniciar = () => {
swal({
            title: "Reiniciar juego?",
            text: "Perderás todo tu puntaje acumulado",
            buttons: {
                cancel: 'Cancelar',
                confirm: 'Nuevo juego'
                },
        })
    .then((value) => {
        switch (value) {
            case null:
                //debe parar el reloj del timer
            break;
            case true:
                niveles();
            break
        }
    })
};


const gameOver = () => {
    swal({
        title: "¡Juego termiando!",
        text: "Puntaje final: ",
        buttons: {
            confirm: 'Nuevo juego', //true
            cancel: 'Reiniciar' //null
            },
    })
.then((value) => {
    switch (value) {
        case null:
            generarGrilla(dificultad)
            //deberia generar la grilla en el mismo nivel en el q estaba
        break;
        case true:
            niveles();
        break
    }
})
}
