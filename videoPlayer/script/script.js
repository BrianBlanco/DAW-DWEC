<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @import url("./css/style.css");
    </style>
</head>

<body>

    <!-- Contenedor de todos los elementos -->
    <div id="contenedor">
        <!-- Contenedor del video central de la pantalla -->
        <div id="contenedorVideoPrincipal">
            <video id="videoPrincipal" src="./videos/0.mp4" type="video/mp4" onclick="play()"
                data--idvideo="./videos/tmbnail0.webp"></video>
            <div id="controles">
                <div id="botonPlay" class="botonControles" onclick="play()"></div>
                <div id="botonMute" class="botonControles" onclick="mute()"></div>
                <div id="botonTiempoAtras" class="botonControles" onclick="atrasar()"></div>
                <div id="botonTiempoAdelante" class="botonControles" onclick="adelantar()"></div>
                <div id="botonReiniciarVideo" class="botonControles" onclick="reiniciarVideo()"></div>
                <div id="fullScreen" class="botonControles" onclick="fullScreen()"></div>
                
                <!--
                <div id="botonMenosVolumen" class="botonControles" onclick="menosVolumen()"></div>
                <div id="botonMasVolumen" class="botonControles" onclick="masVolumen()"></div>
                -->
                <input id="Volume" type="range" onmouseup="setVolume(this.value)" onkeydown="setVolume(this.value)"
                    min="1" max="10" step="1">
                <meter min="0" max="100" low="25" high="75" optimum="100" value="75">

            </div>
        </div>

        <!-- Contenedor de los videos laterales en la derecha -->
        <div id="videosLateral">

        </div>
    </div>

    <script src="./script/script.js"></script>
</body>

</html>
