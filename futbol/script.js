var jugadores;
function cargar() {
    //let campos = document.querySelectorAll(".campo").childs;
    //console.log(campos);

    peticion();
    crearCampos();
}
function crearCampos() {

    document.querySelectorAll(".campo").forEach(function () {
        this.addEventListener("dragover", allowDrop);
        this.addEventListener("drop", drop);
    });
}

function crearJugadores() {
    const banquillo = document.getElementById("banquillo");
    console.log(jugadores);

    for (let i = 0; i < jugadores[2].jugadores.length; i++) {
        let jugadorJSON = jugadores[2].jugadores[i];
        console.log(jugadorJSON);
        let jugador = document.createElement("div");
        jugador.classList.add("jugador");
        jugador.id = jugadorJSON.idJugador;
        jugador.nombre = jugadorJSON.nombreJugador;
        jugador.draggable = true;
        jugador.innerText =
            "id: " + jugadorJSON.idJugador +
            ", nombre: " + jugadorJSON.nombreJugador +
            ", equipo: " + idEquipo;    

        jugador.addEventListener("dragstart", drag);
        banquillo.appendChild(jugador);

    }
}

function resetPlantilla() {
    document.querySelectorAll(".jugador").forEach(e => e.parentNode.removeChild(e));
    crearJugadores();
}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();

}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));


}

function peticion() {

    let ajax = new XMLHttpRequest();
    ajax.addEventListener("readystatechange", llamada);

    ajax.open('POST', 'http://192.168.1.15/futbol/getJugadores.php', true);
    ajax.send();

}

function llamada() {
    if (this.readyState == 4 && this.status == 200) {

        // Recogemos el json que nos da el PHP, lo parseamos y lo mandamos a crearJugadores()
        jugadores = JSON.parse(this.responseText);
        crearJugadores();
    }
}

window.addEventListener("load", cargar);