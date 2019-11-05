window.onload = function () {
    dibujarTablero();
}

function dibujarTablero() {
    let contenedorTotal = document.getElementById("tablero");
    let divCuadricula;

    for (let i = 0; i < 9; i++) {
        divCuadricula = document.createElement("div");
        divCuadricula.classList.add("cuadrado");
        contenedorTotal.appendChild(divCuadricula);
    }

    const cuadrados = document.querySelectorAll(".cuadrado");
    cuadrados.forEach(cuadrado => { cuadrado.addEventListener('click', teclaPulsada); });
}

function teclaPulsada() {
    var contenedorTotal = document.getElementById("tablero");

    if (this.classList.contains("cuadrado")) {
        this.classList.replace("cuadrado", "fichaJugador");

        let random = Math.floor(Math.random() * 10);
        let cuadradoBot;
        let booleanoWhile = true;

        if (document.querySelectorAll(".cuadrado") == null) {
            comprobarFinDeJuego();
        }

        while (booleanoWhile) {
            cuadradoBot = contenedorTotal.childNodes[random];
            
            if (cuadradoBot.classList.contains("cuadrado")) {
                cuadradoBot.classList.replace("cuadrado", "fichaMaquina");
                booleanoWhile = false;
            } else {
                random = Math.floor(Math.random() * 10);
            }
        }



    }

}


function comprobarFinDeJuego(jugador) {
    
        // Comprobacion de las lineas horizontales
    if ((matriz[0][0] == matriz[0][1] && matriz[0][1] == matriz[0][2]) && matriz[0][0] != 0
        ||
        (matriz[1][0] == matriz[1][1] && matriz[1][1] == matriz[1][2]) && matriz[1][0] != 0
        ||
        (matriz[2][0] == matriz[2][1] && matriz[2][1] == matriz[2][2]) && matriz[2][0] != 0
        ||

        // Comprobacion de las lineas verticales
        (matriz[0][0] == matriz[1][0] && matriz[1][0] == matriz[2][0]) && matriz[0][0] != 0
        ||
        (matriz[0][1] == matriz[1][1] && matriz[1][1] == matriz[2][1]) && matriz[0][1] != 0
        ||
        (matriz[0][2] == matriz[1][2] && matriz[1][2] == matriz[2][2]) && matriz[0][2] != 0
        ||

        //Comprobacion de las lineas diagonales
        (matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2]) && matriz[0][0] != 0
        ||
        (matriz[2][0] == matriz[1][1] && matriz[1][1] == matriz[0][2]) && matriz[2][0] != 0
    ) {
        if (jugador == 0) {
            alert("Has ganado!");
        } else {
            alert("Has perdido!");
        }
    }
}
/*



                */