var cambiarRojo = true;
var cambiarAzul = true;
var cambiarVerde = true;
var cambiarNegro = true;

// Redondear el cuadrado cuando se le apunta
function alApuntarAlDiv(cuadradoARedondear) {

        // Redondear el cuadrado
        cuadradoARedondear.style.borderRadius = "50%";

        // Tiempo de transición
        cuadradoARedondear.style.transitionDuration = "1s";
}

// Desredondear el cuadrado cuando se deja de apuntar
function alNoApuntarAlDiv(cuadradoADesredondear) {
        if (mantenerEstatico(cuadradoADesredondear)) {
            
        // Redondear el cuadrado
        cuadradoADesredondear.style.borderRadius = "0%";

        // Tiempo de transición
        cuadradoADesredondear.style.transitionDuration = "1s";

        // Volver a poner la sombra
        cuadradoADesredondear.style.boxShadow = "5px -2px 1px #000";
    }

}

// Eliminar cuadrado seleccionado
function eliminarCuadrado(colorCuadrado, botonAEliminar) {

    // Seleccionamos el cuadrado que vamos a eliminar
    var elementoCuadrado = document.getElementsByClassName(colorCuadrado);

    // Seleccionamos padre del cuadrado seleccionado
    var padreCuadrados = document.getElementById("cuadros");

    elementoCuadrado[0].style.transition = "1s";
    elementoCuadrado[0].style.width = "0px";
    setTimeout(function(){ 

        // Eliminamos el cuadrado
        padreCuadrados.removeChild(elementoCuadrado[0]);
        
        //Eliminar respectivo botón
        botonAEliminar.parentNode.removeChild(botonAEliminar);
    }, 1300);
}

// Quitar sombra al hacer un click sobre el cuadrado
function quitarSombra(cuadrado) {
    if (mantenerEstatico(cuadrado)) {
        cuadrado.style.boxShadow = "0px 0px 0px";
    }
}

// Poner sombra interior al pulsar doble click y dejar estático el elemento
function dobleClick(cuadrado) {
    cuadrado.style.webkitBoxShadow = "inset -12px -15px 4px -1px rgba(0,0,0,0.75)";
    cuadrado.style.mozBoxShadow = "inset -12px -15px 4px -1px rgba(0,0,0,0.75)";
    cuadrado.style.boxShadow = "inset -12px -15px 4px -1px rgba(0,0,0,0.75)";

    var classDelCuadrado = cuadrado.getAttribute("class").split(" ")[1];

    switch (classDelCuadrado) {
        case "rojo":
            cambiarRojo = false;
            break;
        case "azul":
            cambiarAzul = false;
           break;
        case "verde":
            cambiarVerde = false;
          break;
      
        case "negro":
            cambiarNegro = false;
          break;

        default:
            break;
    }
    
}

function mantenerEstatico(cuadrado) {
    var cambiarlo = false;

    switch (cuadrado.getAttribute("class").split(" ")[1]) {                
        case "rojo":
            if (cambiarRojo) {
                cambiarlo = true;
            }
            break;
        case "azul":
            if (cambiarAzul) {
                cambiarlo = true;
            }
           break;
        case "verde":
            if (cambiarVerde) {
                cambiarlo = true;
            }
          break;
      
        case "negro":
            if (cambiarNegro) {
                cambiarlo = true;
            }
          break;

        default:
            break;
    }
    return cambiarlo;
}