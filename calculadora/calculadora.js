window.onload = function() {
    var pantalla = document.getElementById('inputPantalla');

    var botones = document.getElementsByClassName('boton');

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", botonApretado, false);
    }


    function botonApretado() {
        var textoBoton = this.innerText;

        alert(parseInt(textoBoton));

        //hacerOperacion(textoBoton);

        anyadirTexto(textoBoton);
    }

    function anyadirTexto(textoBoton) {
        alert(textoBoton);
        if (pantalla.value != 0) {
            pantalla.value += textoBoton;
        } else {
            pantalla.value = textoBoton;
        }
    }

    function hacerOperacion(botonApretado) {
        if (botonApretado.innerText == "C") {
            borrarPantalla();
        }
    }

    function borrarPantalla() {
        pantalla.value = "";
    }
};