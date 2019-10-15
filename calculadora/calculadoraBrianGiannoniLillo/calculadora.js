/*
* Calculadora
* Brian Giannioni Lillo
* DAW-DWEC
*/

// El string que rellenaremos con el valor de la pantalla para operar
// Con él
var stringEval = "0";

// Creamos todo al cargar el documento
window.onload = function() {

    // Obtenemos la pantalla
    var pantalla = document.getElementById('inputPantalla');

    // Obtenemos los botones
    var botones = document.getElementsByClassName('boton');

    // Le damos a cada botón con la clase "boton" un evento
    for (let i = 0; i < botones.length; i++) {

        // Al pulsarlos, ejecutan la función "botonApretado"
        botones[i].addEventListener("click", botonApretado, false);

        // Al mantenerlos pulsados, obtienen una sombra interior
        botones[i].addEventListener("mousedown", ponerSombraInterior, false);

        // Al dejar de mantenerlos pulsados, se quita la sombra interior
        botones[i].addEventListener("mouseup", quitarSombraInterior, false);
    }

    // Realizamos operaciones con el botón pulsado
    function botonApretado() {

        // Cogemos el contenido del botón
        var textoBoton = this.innerText;

        // Comprobamos si es un número o una operación
        if (isNaN(textoBoton)) {

            // De no ser un número, operamos con él
            hacerOperacion(textoBoton);
        } else {

            // De ser un número, lo mostramos en la pantalla
            anyadirTexto(textoBoton);
        }
    }

    // Funcion para añadir texto a la pantalla
    function anyadirTexto(textoBoton) {

        // Si la pantalla no es igual a 0, coge el texto ya
        // Escrito y le añade el texto del botón que teníamos

        if (textoBoton == "*") {
            textoBoton = "x";
        }

        if (!pantallaACero()) {
            pantalla.value += textoBoton;
        } else {

            // Si es igual a 0, coloca directamente el valor del botón
            pantalla.value = textoBoton;
        }
        
        // Equivalemos el valor de la operacion que vamos a
        // operar con el texto de la pantalla
        this.stringEval = pantalla.value;
    }

    // Manipulamos los operadores 
    function hacerOperacion(botonApretado) {

        // El tipo de operación es el operador que vamos a utilizar
        let tipoOperacion = "";

        // Variable para saber si debemos comprobar el estado del interior
        // De los carácteres de la pantalla o no
        let hacerComprobacion = true;

        // Comprobamos cual es el valor del botón apretado y elegimos el
        // Operador adecuado
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

        // Si es un valor diferente a "=", entonces hará la comprobación
        if (hacerComprobacion) {
            comprobarIntegridadPantalla(tipoOperacion);
        }
        
    }

    // Nos aseguramos que no hay varios operadores juntos ni errores
    // Que puedan alterar en mala medida el funcionamiento del cálculo
    function comprobarIntegridadPantalla(tipoOperacion) {
        let hacerOperacion = true;

        // Comprobamos que el último caracter no sea un operando
        if (isNaN(saberUltimoCaracter()) && saberUltimoCaracter() != ")") {
            borrarUnCaracter();
            pantalla.value += tipoOperacion;
            hacerOperacion = false;

            // Que la pantalla no esté a cero
        } else if (pantallaACero()) {
            hacerOperacion = false;
            // Que el tipo de operación no esté vacío
        } else if (tipoOperacion == "") {
            hacerOperacion = false;
        }

        // Si todo se cumple, añadimos el operando a la pantalla
        if (hacerOperacion) {
            anyadirTexto(tipoOperacion);
        }
    }

    // Calcular el valor del "stringEval", que contiene todas las
    // Operaciones que hemos estado acumulando
    function calcularResultado() {

        // Nos cercioramos que no se pueda dividir entre 0
        if (pantalla.value.includes("/0")) {
            alert("No se puede dividir entre 0");
        } else {

            // No dejamos que se hagan operaciones si el último carácter
            // No es un número
            if (!isNaN(saberUltimoCaracter())) {

                // Realizamos la operación y lo metemos en la variable "resultado"
                let resultado = eval(stringEval.replace("x", "*").replace("%", "/100*"));
                
                
                // Mostramos el valor del resultado en la pantalla
                pantalla.value = resultado;
            }
        }
    }

    // Comprobamos si la pantalla tiene solamente un 0
    function pantallaACero() {
        if (pantalla.value == "0") {
            return true;
        } else {
            return false;
        }
    }

    // Eliminar el contenido de la pantalla y añadir un 0
    function borrarPantalla() {
        pantalla.value = "0";
    }

    // Borrar el último caracter de la pantalla, de estar vacía, se añadirá un 0
    function borrarUnCaracter() {
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);

        if (pantalla.value == "") {
            pantalla.value = "0";
        }
    }

    // Poner paréntesis cuando se pulse dicho botón
    function ponerParentesis() {
        if (!pantalla.value.includes(")") || !pantalla.value.includes("(")) {
            pantalla.value = "(" + pantalla.value + ")";
        }
        
    }

    // Poner la sombra interior al mantener pulsado algún botón
    function ponerSombraInterior() {
        this.classList.add("sombraInterior");
    }
    
    // Quitar la sombra interior al dejar de mantener pulsado algún botón
    function quitarSombraInterior() {
        this.classList.remove("sombraInterior");
    }

    // Manejo de los eventos de teclado
    document.addEventListener('keydown', function(event) {

        // Cogemos el valor de la tecla pulsada y elegimos cual es
        // Su equivalencia en la calculadora, entonces, operamos con ella
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

    // Saber cual es el último caracter que hay en la pantalla
    function saberUltimoCaracter() {
        return pantalla.value.substring(pantalla.value.length - 1, pantalla.value.length);
    }
};