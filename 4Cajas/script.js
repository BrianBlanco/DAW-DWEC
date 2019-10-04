// Redondear el cuadrado cuando se le apunta
function alApuntarAlDiv(cuadradoARedondear) {

    // Redondear el cuadrado
    cuadradoARedondear.style.borderRadius = "50%";

    // Tiempo de transición
    cuadradoARedondear.style.transitionDuration = "1s";
}

// Desredondear el cuadrado cuando se deja de apuntar
function alNoApuntarAlDiv(cuadrdoADesredondear) {

    // Redondear el cuadrado
    cuadrdoADesredondear.style.borderRadius = "0%";

    // Tiempo de transición
    cuadrdoADesredondear.style.transitionDuration = "1s";
}

// Eliminar cuadrado seleccionado
function eliminarCuadrado(colorCuadrado, botonAEliminar) {

    // Seleccionamos el cuadrado que vamos a eliminar
    var elementoCuadrado = document.getElementsByClassName(colorCuadrado);

    // Seleccionamos padre del cuadrado seleccionado
    var padreCuadrados = document.getElementById("cuadros");

    // Eliminamos el cuadrado
    padreCuadrados.removeChild(elementoCuadrado[0]);

    //Eliminar respectivo botón
    botonAEliminar.parentNode.removeChild(botonAEliminar);
}

// Quitar sombra al hacer un click sobre el cuadrado
function cambiarSombra(cuadrado) {
    cuadrado.style.boxShadow = "0px 0px 0px";
    var classDelCuadrado = cuadrado.getAttribute("class");
    alert(classDelCuadrado);
    const element = document.querySelector(classDelCuadrado.split(" ")[1])
    alert(element);
}