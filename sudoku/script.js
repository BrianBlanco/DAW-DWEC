// Tablero constante donde vamos a mostrar los números
const tablero = document.querySelector("tablero");

function init() {

    // Funcion que nos devuelve una plantilla aleatoria
    let plantilla = elegirPlantilla();
    let tamanyoTablero = 9 * 9;
    let contador = 1

    // Creamos el tablero y le asignamos un número a cada una de las celdas
    for (let i = 0; i < tamanyoTablero; i++) {

        // Creamos el elemento
        nuevoDiv = document.createElement("div");

        // Agregamos las clases necesarias para rodear con mayor intensidad los bordes
        ponerBordesCeldas(nuevoDiv, i);

        // Le añadimos la clase "celda"
        nuevoDiv.classList.add("celda");

        // Le agregamos el data.indice con el número del contador empezando en 1
        nuevoDiv.dataset.indice = i + 1;

        // Ponemos el valor en cada una de las celdas según la plantilla
        let valorCasilla = plantilla[parseInt(i / 9)][parseInt(i % 9)];

        // Si la casilla contiene en valor "0", entonces no escribe nada
        if (valorCasilla != 0) {
            nuevoDiv.innerText = valorCasilla;
        }

        // Se lo añadimos como hijo al tablero
        tablero.appendChild(nuevoDiv);

    }
}

// Devuelve una plantilla con 17 valores vacíos, ya que son los mínimos
// para poder resolver el sudoku y que tenga una sola solución
function elegirPlantilla() {

    // Primera plantilla
    let plantilla = [
        [4, 9, 5, 2, 8, 7, 6, 3, 1],
        [8, 7, 6, 9, 1, 3, 5, 4, 2],
        [3, 2, 1, 6, 5, 4, 9, 8, 7],
        [9, 4, 8, 7, 6, 5, 2, 1, 3],
        [7, 6, 3, 8, 2, 1, 4, 9, 5],
        [5, 1, 2, 4, 3, 9, 8, 7, 6],
        [6, 8, 9, 1, 7, 2, 3, 5, 4],
        [2, 5, 7, 3, 4, 8, 1, 6, 9],
        [1, 3, 4, 5, 9, 6, 7, 2, 8]
    ];

    let casillasVacias = 0;

    // Mientras que no hayan 17 celdas vacías (igualdas a 0), coge una posición
    // aleatoria y la convierte a 0 si no es ya 0
    let randomI;
    let randomJ;
    while (casillasVacias < 64) {
        randomI = parseInt(Math.random() * (9 - 0) + 0);
        randomJ = parseInt(Math.random() * (9 - 0) + 0);

        if (plantilla[randomI][randomJ] != 0) {
            plantilla[randomI][randomJ] = 0;
            casillasVacias++;
        }
    }

    // Devuelve la plantilla modificada
    return plantilla;
}

function ponerBordesCeldas(nuevoDiv, i) {
    if (parseInt(parseInt(i / 9) % 3) == 0) {
        nuevoDiv.classList.add("bordeArriba");
    }

    if (parseInt(parseInt(i % 9) % 3) == 0) {
        nuevoDiv.classList.add("bordeIzquierda");
    }

    if (parseInt((i + 1) % 9) == 0) {
        nuevoDiv.classList.add("bordeDerecha");
    }

    if (parseInt(i / 9) == 8) {
        nuevoDiv.classList.add("bordeAbajo");
    }

}
// https://codepen.io/pavlovsk/pen/XmjPOE
window.onload = init;