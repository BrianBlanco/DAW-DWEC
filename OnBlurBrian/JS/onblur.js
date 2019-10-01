
 var arrayRegEx = new Array(/^[A-Za-z+\s]+$/,//Nombre
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,//email
    /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,//DNI
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,//password
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/ // IP
    );

    var arraySubmit = [
        ["nombre", false],
        ["apellido", false],
        ["email", false],
        ["dni", false],
        ["password", false],
        ["repassword", false],
        ["ipequipo", false]
    ];

    var mapa = new Map(arraySubmit);

    function comprobar(valor, elemento) {
        //var reg = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        //alert(elemento);
        switch(elemento) {
            case 'nombre':
                test(valor, arrayRegEx[0], elemento);
            break;

            case 'apellido':
                test(valor, arrayRegEx[0], elemento);
            break;

            case 'email':
                test(valor, arrayRegEx[1], elemento);
            break;

            case 'dni':
                test(valor, arrayRegEx[2], elemento);
            break;

            case 'password':
                test(valor, arrayRegEx[3], elemento);
            break;

            case 'repassword':
                testPassword(valor, elemento);
            break;

            case 'ipequipo':
                test(valor, arrayRegEx[4], elemento);
            break;
        }
    }

    function test(valor, reg, elemento) {
        if (!reg.test(valor.value)) {
            valor.value = "ERROR";
            mapa.set(elemento, false);
        } else {
            mapa.set(elemento, true);
        }
        console.log(mapa);
    }
    function testPassword(valor, elemento) {
        if (document.getElementById("password").value == valor.value) {
            mapa.set(elemento, true);
        } else {
            mapa.set(elemento, false);
        } 
    }

    function submitButton() {
        if (Array.from(mapa.values()).includes(false)) {
            let string = "";
            for (let [k, v] of mapa) {
                if (v === false) {
                    string += k + ", ";
                }
            }

            alert("Los campos incorrectos son:\n" + string);
        } else {
            alert("Todo correcto, datos enviados!");
        }
    }



    function submitAction() {
        if (array.cont) {
            
        }
    }

