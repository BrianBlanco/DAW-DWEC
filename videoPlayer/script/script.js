// Declaramos el video fuera del init para hacerlo global
var video;

function init() {
    // Variable con la barra derecha que tiene los videos
    const videosLateral = document.getElementById("videosLateral");

    // Inicializamos la variable "video"
    obtenerVideoPrincipal();

    // Creamos cada uno de los videos de la barra lateral derecha
    let nuevoDiv;
    for (let i = 1; i <= 5; i++) {

        // Creamos un elemento img y le damos valores como el thumbnail y la
        // ruta local del video
        nuevoDiv = document.createElement("img");
        nuevoDiv.src = "./videos/tmbnail" + i + ".webp";
        nuevoDiv.dataset.Idvideo = "./videos/" + i + ".mp4";

        // Le damos un evento onclick a los videos laterales
        nuevoDiv.onclick = function () {
            cambiarVideo(this);
        }

        // Le agregamos la clase videosLaterales y se lo ponemos como hijo
        // al div videosLateral
        nuevoDiv.classList.add("videosLaterales");
        videosLateral.appendChild(nuevoDiv);
    }
}

// Funcion que pausa o continua el video cambiando el icono segun play o pause
function play() {
    const botonPlay = document.getElementById("botonPlay");
    if (video.paused) {
        video.play();
        botonPlay.style.backgroundImage = 'url("./iconos/pause.svg")';
    } else {
        video.pause();
        botonPlay.style.backgroundImage = 'url("./iconos/play.svg")';
    }
}

// Funcion para adelantar 10 segundos de video
function adelantar() {
    video.currentTime += 10;
}

// Funcion para atrasar 10 segundos de video
function atrasar() {
    video.currentTime -= 10;
}

// Funcion para mutear el video cambiando el icono si esta muteado o no
function mute() {
    const botonMute = document.getElementById("botonMute");

    if (video.muted) {
        video.muted = false;
        botonMute.style.backgroundImage = 'url("./iconos/unmuted.svg")';
    } else {
        video.muted = true;
        botonMute.style.backgroundImage = 'url("./iconos/mute.svg")';
    }
}

// Inicializar la variable video con el video principal
function obtenerVideoPrincipal() {
    video = document.getElementById("videoPrincipal");
}

// Funcion para poner el video desde el segundo 0
function reiniciarVideo() {
    video.currentTime = 0;
}

// Funcion para establecer el volumen con una barra lateral
function setVolume(val) {
    let newVolume = val / 10;
    video.volume = newVolume;
}

function fullScreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

// Funcion que cambia el video principal segun en cual hagamos click
function cambiarVideo(nuevoVideo) {

    // Cogemos el link local y la miniatura del video principal
    let srcVideoPrincipal = video.src;
    let thumbnailVideoLateral = video.getAttribute("data--idvideo");

    // Asignamos los valores del video pulsado al video principal
    video.src = nuevoVideo.getAttribute("data--idvideo");
    video.dataset.Idvideo = nuevoVideo.src;

    // Asignamos los valores del video principal al video pulsado
    nuevoVideo.src = thumbnailVideoLateral;
    nuevoVideo.dataset.Idvideo = srcVideoPrincipal;

    // Recargamos el video y lo reproducimos
    video.load();

    play();
}

// La funcion init se lanzara al cargarse la pagina
window.onload = init;
