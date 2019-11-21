var video;
function init() {
    const videosLateral = document.getElementById("videosLateral");
    obtenerVideoPrincipal();
    let nuevoDiv;
    for (let i = 1; i <= 4; i++) {
        nuevoDiv = document.createElement("img");
        nuevoDiv.src = "./videos/tmbnail" + i + ".webp";
        nuevoDiv.dataset.Idvideo = "./videos/" + i + ".mp4";

        nuevoDiv.onclick = function() {
            cambiarVideo(this);
        }

        nuevoDiv.classList.add("videosLaterales");
        videosLateral.appendChild(nuevoDiv);
    }

    
}

function play() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function adelantar() {
    video.currentTime += 10;
}

function atrasar() {
    video.currentTime -= 10;
}

function mute() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function obtenerVideoPrincipal() {
    video = document.getElementById("videoPrincipal");
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
