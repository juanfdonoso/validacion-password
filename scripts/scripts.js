function mostrarPassword(){
    var pw = document.getElementById("pw");
    var icono = document.getElementById("icono");
    if (pw.type == "password"){
        pw.type = "text";
        icono.classList.toggle("fa-eye-slash", false);
        icono.classList.toggle("fa-eye", true);
    }else{
        pw.type = "password";
        icono.classList.toggle("fa-eye", false);
        icono.classList.toggle("fa-eye-slash", true);
    }

}

var flagError;

function validarPassword(){

    flagError = false;

    var errores = new Array();

    //leemos el campo con el password
    var pw = document.getElementById("pw").value;
    
    //validación número de caracteres
    var n = pw.length;
    if (n < 8) {
        errores.push("El password ingresado contiene menos de 8 caracteres");
        flagError = true;
    }

    //validación letra mayúscula
    var mayusculas = 0;
    for (var i=0; i<n; i++){
        if (pw.charCodeAt(i) >= 65 && pw.charCodeAt(i) <= 90){
            mayusculas++;
        }
    }
    if (mayusculas === 0) {
        errores.push("El password ingresado no contiene una letra mayúscula");
        flagError = true;
    }

    //validación minúsculas
    var minusculas = 0;
    for (var i=0; i<n; i++){
        if (pw.charCodeAt(i) >= 97 && pw.charCodeAt(i) <= 122){
            minusculas++;
        }
    }
    if (minusculas === 0) {
        errores.push("El password ingresado no contiene una letra minúscula");
        flagError = true;
    }

    //validación números
    var numeros = 0;
    for (var i=0; i<n; i++){
        if (pw.charCodeAt(i) >= 48 && pw.charCodeAt(i) <= 57){
            numeros++;
        }
    }
    if (numeros === 0) {
        errores.push("El password ingresado no contiene un número");
        flagError = true;
    }

    //validación caracteres especiales
    var caracterEspecial = 0;
    for (var i=0; i<n; i++){
        var letra = pw.charAt(i);
        if (letra === "@" || letra === "#" || letra === "$" || letra === "-" || letra === "_" || letra === "!" || letra === "?" || letra === "*" || letra === "%" || letra === "&"){
            caracterEspecial++;
        }
    }
    if (caracterEspecial <2) {
        errores.push("El password ingresado no contiene, por lo menos, dos caracteres especiales");
        flagError = true;
    }

    imprimirMensajes(errores);


}


function imprimirMensajes(errores){
    var msj = document.getElementById("msj");
    msj.innerHTML = "";

    if (flagError){
        errores.forEach(function (error){
            var li = document.createElement("li");
            li.innerHTML = error;
            msj.appendChild(li);
            msj.classList.toggle("passwordCorrecto", false);
            msj.classList.toggle("error", true);
        });

    }else{
        var li = document.createElement("li");
        li.innerHTML = "El password ingresado es válido";
        msj.appendChild(li);
        msj.classList.toggle("error", false);
        msj.classList.toggle("passwordCorrecto", true);  
    }

}