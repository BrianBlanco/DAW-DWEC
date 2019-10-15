var stringEval = "0";

window.onload = function() {
    var pantalla = document.getElementById('inputPantalla');

    var botones = document.getElementsByClassName('boton');

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", botonApretado, false);
        botones[i].addEventListener("mousedown", ponerSombraInterior, false);
        botones[i].addEventListener("mouseup", quitarSombraInterior, false);
    }

    function botonApretado() {
        var textoBoton = this.innerText;

        //hacerOperacion(textoBoton);
        if (isNaN(textoBoton)) {
            hacerOperacion(textoBoton);
        } else {
            anyadirTexto(textoBoton);
        }
    }

    function anyadirTexto(textoBoton) {
            if (!pantallaACero()) {
                pantalla.value += textoBoton;
            } else {
                pantalla.value = textoBoton;
            }
            
            this.stringEval = pantalla.value;
    }

    function hacerOperacion(botonApretado) {
        let tipoOperacion = "";
        let hacerComprobacion = true;

        switch (botonApretado) {
            case "C":
                borrarPantalla();
                break;

            case "%":
                tipoOperacion = "%";
                break;

            case "«":
                borrarUnCaracter();
                break;

            case "/":
                tipoOperacion = "/";
                break;

            case "x":
                tipoOperacion = "*";
                break;

            case "-":
               tipoOperacion = "-";
                break;

            case "+":
                tipoOperacion = "+";
                break;

            case "=":
                calcularResultado();
                hacerComprobacion = false
                break;

            case "()":
                ponerParentesis();
                break;
        }
        if (hacerComprobacion) {
            comprobarIntegridadPantalla(tipoOperacion);
        }
        
    }

    function comprobarIntegridadPantalla(tipoOperacion) {
        let hacerOperacion = true;

        if (isNaN(saberUltimoCaracter()) && saberUltimoCaracter() != ")") {
            borrarUnCaracter();
            pantalla.value += tipoOperacion;
            hacerOperacion = false;
        } else if (pantallaACero()) {
            hacerOperacion = false;
        } else if (tipoOperacion == "") {
            hacerOperacion = false;
        }

        if (hacerOperacion) {
            anyadirTexto(tipoOperacion);
        }
    }

    function calcularResultado() {
        if (pantalla.value.includes("/0")) {
            alert("No se puede dividir entre 0");
        } else {
            if (!isNaN(saberUltimoCaracter())) {
                let resultado = eval(stringEval);
                
                pantalla.value = resultado;
                this.primerNumero = resultado;
                this.booleanoOperacion = true;
            }
        }
    }

    function pantallaACero() {
        if (pantalla.value == "0") {
            return true;
        } else {
            return false;
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

    function ponerParentesis() {
        if (!pantalla.value.includes(")") || !pantalla.value.includes("(")) {
            pantalla.value = "(" + pantalla.value + ")";
        }
        
    }

    function ponerSombraInterior() {
        this.classList.add("sombraInterior");
    }
    
    function quitarSombraInterior() {
    
        this.classList.remove("sombraInterior");
    }

    document.addEventListener('keydown', function(event) {
        let teclaPulsada = event.key;
        if(teclaPulsada >= 0 && teclaPulsada <= 9) {
            anyadirTexto(teclaPulsada);
        } else {
            switch (teclaPulsada) {
                case "c":
                    borrarPantalla();
                    break;
                case "Backspace":
                    borrarUnCaracter();
                    break;
                case "/":
                    hacerOperacion("/");
                    break;
                case "*":
                    hacerOperacion("x");
                    break;
                case "-":
                    hacerOperacion("-");
                    break;
                case "+":
                    hacerOperacion("+");
                    break;
                case "Enter":
                    hacerOperacion("=");
                    break;
                case "p":
                    ponerParentesis();
                    break;
            }
        }
    });
    function saberUltimoCaracter() {
        return pantalla.value.substring(pantalla.value.length - 1, pantalla.value.length);
    }
};