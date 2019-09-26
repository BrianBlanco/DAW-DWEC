
 var arrayRegEx = new Array(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/,//Nombre
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,//email
    /^[0-9]{9}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,//DNI
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,//password
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
                reg = arrayRegEx[1];
            break;

            case 'dni':
                reg = arrayRegEx[2];
            break;

            case 'password':
                reg = arrayRegEx[3];
            break;

            case 'repassword':
                reg = arrayRegEx[3];
                testPassword(valor, valor.value);
                
            break;

        }
        
        if (reg.test(valor.value)) {
                valor.style.backgroundColor = 'white';
        } else {
                valor.style.backgroundColor = 'red';
        }

    }
function testPassword(valor, password) {
    
    if (document.getElementById("password").value == password) {
        valor.style.backgroundColor = 'white';
    } else {
        valor.style.backgroundColor = 'red';
    } 
}
