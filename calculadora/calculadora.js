var primerNumero = 0;
var segundoNumero = 0;
var tipoOperacion;
var booleanoOperacion;

window.onload = function() {
    var pantalla = document.getElementById('inputPantalla');

    var botones = document.getElementsByClassName('boton');

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", botonApretado, false);
    }

    function botonApretado() {
        var textoBoton = this.innerText;

        //hacerOperacion(textoBoton);
        if (isNaN(textoBoton)) {
            hacerOperacion(textoBoton);
            booleanoOperacion = true;
        } else {
            booleanoOperacion = false;
            anyadirTexto(textoBoton);
        }
    }

    function anyadirTexto(textoBoton) {
            if (pantalla.value != 0) {
                pantalla.value += textoBoton;
            } else {
                pantalla.value = textoBoton;
            }          
    }

    function hacerOperacion(botonApretado) {

        if (this.primerNumero == 0) {
            this.primerNumero = pantalla.value;
        } else {
            this.segundoNumero = parseInt(pantalla.value.split(this.tipoOperacion, 2)[1]);
        }

        switch (botonApretado) {
            case "C":
                borrarPantalla();
                break;

            case "%":
                this.tipoOperacion = "%";
                break;

            case "«":
                borrarUnCaracter();
                break;

            case "/":
                this.tipoOperacion = "/";
                break;

            case "x":
                this.tipoOperacion = "*";
                break;

            case "-":
                this.tipoOperacion = "-";
                break;

            case "+":
                this.tipoOperacion = "+";
                break;

            case "=":
                calcularResultado();
                break;

            case "()":
                ponerParentesis();
                break;
        }

        if (comprobarIntegridadPantalla()) {
            anyadirTexto(this.tipoOperacion);
        }
    }

    function borrarPantalla() {
        pantalla.value = "0";
    }

    function borrarUnCaracter() {
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);

        if (pantalla.value == "") {
            pantalla.value = "0";
        }
    }

    function comprobarIntegridadPantalla() {
        let hacerOperacion = true;
        
        if (isNaN(pantalla.value)) {
            calcularResultado();
        } else if (pantallaACero()) {
            hacerOperacion = false;
        } else if (booleanoOperacion) {
            hacerOperacion = false;
        }

        return hacerOperacion;
    }

    function pantallaACero() {
        if (pantalla.value == "0") {
            return true;
        } else {
            return false;
        }
    }

    function calcularResultado() {
        let stringAEvaluar = this.primerNumero + "" + this.tipoOperacion + "" + this.segundoNumero;
        let resultado = eval(stringAEvaluar);
        pantalla.value = resultado;
        this.primerNumero = resultado;
        this.tipoOperacion = "";
        this.booleanoOperacion = true;
    }
};