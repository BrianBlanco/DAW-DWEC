function pedirArray() {
    var arrayLength = prompt("Dime el tamaño del aray");

    var array = new Array;

    for (let i = 0; i < arrayLength; i++) {
        array.push(prompt("Dime el valor de la posición " + i));
    }

    alert(Math.max.apply(null, array));
}

function numeroFeliz() {
    var cantidadNumerosFelices = 0;

    var numeroAComprobar = 1;

    var numeroAComprobarAux;

    var tamañyoNumAComprobar = 0;

    var numeroSumado = 0;

    var resultado = "Los 5 primeros numeros felices son: ";

    var aux = 1;
    
    while(cantidadNumerosFelices < 5) {
        numeroAComprobarAux = numeroAComprobar;
        while(numeroAComprobarAux != 1 && numeroAComprobarAux != 0) {
            
            alert("comprobar " + numeroAComprobarAux);

            tamañyoNumAComprobar = numeroAComprobarAux.toString().length;

            numeroSumado = 0;

            // numeroSumado += (numeroAComprobarAux - (numeroAComprobarAux % aux)) / 10;

            for (let i = 0; i < tamañyoNumAComprobar; i++) {
                
                aux *= 10;
                alert("Antes: " + numeroAComprobarAux);
                if(tamañyoNumAComprobar == 1){
                    numeroSumado += Math.pow(numeroAComprobarAux, 2);
                } else {
                    numeroSumado += Math.pow((numeroAComprobarAux - (numeroAComprobarAux % aux)) / 10, 2);
                }
                
                alert("Después: " + numeroSumado);
            }

            if(numeroAComprobarAux == numeroAComprobar) {
                break;
            }

            aux = 1;
        }

            resultado += numeroAComprobar + ", ";

            alert(resultado);
            numeroAComprobar++;
            alert("comprobar 2: " + numeroAComprobar);
            numeroAComprobarAux = numeroAComprobar;
        }

     alert(resultado);
}