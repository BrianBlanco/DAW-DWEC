window.onload = function() {
    var pantalla = document.getElementById('inputPantalla');

    var botones = document.getElementsByClassName('boton');

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", botonApretado, false);
    }


    function botonApretado() {
        var botonApretado = this.innerText;

        alert(parseInt(botonApretado));

        hacerOperacion(botonApretado);

        anyadirTexto(botonApretado);
    }

    function anyadirTexto(boton) {
        if (pantalla.value != 0) {
            pantalla.value += boton.innerText;
        } else {
            pantalla.value = boton.innerText;
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