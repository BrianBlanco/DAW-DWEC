var jsonObj;
function cargar() {
    //let campos = document.querySelectorAll(".campo").childs;
    //console.log(campos);

    peticion();

    document.getElementById("campo1").addEventListener("dragover", allowDrop);
    document.getElementById("campo2").addEventListener("dragover", allowDrop);
    document.getElementById("drag1").addEventListener("dragstart", drag);
    document.getElementById("campo2").addEventListener("drop", drop);
    document.getElementById("campo1").addEventListener("drop", drop);
}

function crearJugadores(jugadores) {
    const banquillo = document.getElementById("banquillo");

    console.log(jugadores);


    for(let jugadorJSON in jugadores){

        let jugador = document.createElement("div");
        console.log(jugadorJSON[2]);
        jugador.classList.add("jugador");
        jugador.id = jugadorJSON.id;
        jugador.nombre = jugadorJSON.nombre;

        document.addEventListener("dragstart", drag);
        banquillo.appendChild(jugador);
    }



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


    let formulario = new FormData();
    formulario.append("nombre", "brian");
    formulario.append("apellidos", "giannoni");

    let ajax = new XMLHttpRequest();
    ajax.addEventListener("readystatechange", llamada);

    ajax.open('POST', 'http://localhost/futbol/jsonformatter.php', true);
    ajax.send(formulario);

}

function llamada() {
    if (this.readyState == 4 && this.status == 200) {

        // Recogemos el json que nos da el PHP, lo parseamos y lo mandamos a crearJugadores()
        jsonObj = JSON.parse(this.responseText);
        crearJugadores(jsonObj);
    }
}

window.addEventListener("load", cargar);