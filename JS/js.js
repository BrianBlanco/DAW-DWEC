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

    var numeroSumado = 0;

    var resultado = "";

    var aux;
    
    while(cantidadNumerosFelices < 5) {
        aux = 1;
        numeroSumado = numeroAComprobar;

        while(numeroSumado != 1 || numeroSumado != numeroAComprobar || numeroSumado == 4) {
            aux *= 10;
            alert("comprobar " + numeroAComprobar);
            numeroSumado += Math.pow(numeroSumado % aux, 2);
            alert("sumado " + numeroSumado);
        }

            resultado += numeroAComprobar + ", ";

            alert(resultado);
            numeroAComprobar++;
            numeroSumado = 0;
        
     }

     alert(resultado);
}