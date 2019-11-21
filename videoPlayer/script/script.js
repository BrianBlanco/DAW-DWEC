var video;

function init() {
    const videosLateral = document.getElementById("videosLateral");
    obtenerVideoPrincipal();
    let nuevoDiv;
    for (let i = 1; i <= 4; i++) {
        nuevoDiv = document.createElement("img");
        nuevoDiv.src = "./videos/tmbnail" + i + ".webp";
        nuevoDiv.dataset.Idvideo = "./videos/" + i + ".mp4";

        nuevoDiv.onclick = function () {
            cambiarVideo(this);
        }

        nuevoDiv.classList.add("videosLaterales");
        videosLateral.appendChild(nuevoDiv);
    }
}

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

function adelantar() {
    video.currentTime += 10;
}

function atrasar() {
    video.currentTime -= 10;
}

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

function obtenerVideoPrincipal() {
    video = document.getElementById("videoPrincipal");
}

function reiniciarVideo() {
    video.currentTime = 0;
}

function SetVolume(val) {
    var newVolume = val / 10;
    // when is 1 it will give 0.1 and so on up to 0.9 
    //next push will be 1 and it stops.
    video.volume = newVolume;
};

function menosVolumen() {
    if (video.volume > 0) {
        video.volume -= 0.1;
    }

}

function masVolumen() {
    if (video.volume < 1) {
        video.volume += 0.1;
    }

}

function cambiarVideo(nuevoVideo) {
    let srcVideoPrincipal = video.src;
    let thumbnailVideoLateral = video.getAttribute("data--idvideo");

    video.src = nuevoVideo.getAttribute("data--idvideo");
    video.dataset.Idvideo = nuevoVideo.src;
    nuevoVideo.src = thumbnailVideoLateral;
    nuevoVideo.dataset.Idvideo = srcVideoPrincipal;
    video.load();
    video.play();
}


window.onload = init;