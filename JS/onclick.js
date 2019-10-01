
 var arrayRegEx = new Array(/^[A-Za-z+\s]+$/,//Nombre
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,//email
    /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,//DNI
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,//password
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/ // IP
    );

    function comprobar(valor, elemento) {
        //var reg = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        //alert(elemento);
        switch(elemento) {
            case 'nombre':
                reg = arrayRegEx[0];
            break;

            case 'apellido':
                reg = arrayRegEx[0];
            break;

            case 'email':
                test(valor, arrayRegEx[1]);
            break;

            case 'dni':
                    test(valor, arrayRegEx[2]);
            break;

            case 'password':
                    test(valor, arrayRegEx[3]);
            break;

            case 'repassword':
                testPassword(valor);
            break;

            case 'ipequipo':
                    test(valor, arrayRegEx[4]);
            break;
        }

    }

    function test(valor, reg) {
        if (reg.test(valor.value)) {
            valor.style.backgroundColor = 'white';
        } else {
            valor.style.backgroundColor = 'red';
        }
    }
    function testPassword(valor) {
        if (document.getElementById("password").value == valor.value) {
            valor.style.backgroundColor = 'white';
        } else {
            valor.style.backgroundColor = 'red';
        } 
    }

    function alertButton() {
        alert("Enviado");
    }