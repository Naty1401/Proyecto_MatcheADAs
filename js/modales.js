const bienvenida = () => {
    // swal('¡Bienvenida!', "En MatcheADAs tu objetivo es juntar 3 o mas items del mismo tipo, ya sea en fila o en columna. Para eso selecciona un ítem y a continuación un ítem adyaceente para intercambiarlos de lugar. Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o mas hasta que se acabe el tiempo! Controles ", {   
    //     button : "A Jugar " , 
    // } )
    
    // .then(niveles)
    swal({
        title: '¡Bienvenida!',
        text: `En MatcheADAs tu objetivo es juntar 3 o mas items del mismo tipo, ya sea en fila o en columna. Para eso selecciona un ítem y a continuación un ítem adyaceente para intercambiarlos de lugar. 
        
        Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o mas hasta que se acabe el tiempo! 
        
        Controles`,
        button: "A Jugar " ,
    })
    .then(niveles)
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

// const reiniciar = () => {
//     swal({
//         title: ball,
//         text: blalabala,
//         buttons: {
//             cancel: true,
//             //confirm: "Confirm",
//             roll: {
//             text: "Nuevo juego",
//             value: "roll",
//           },
//         },
//       });
//     }