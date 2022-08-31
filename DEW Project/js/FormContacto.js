
//accediendo al formulario
var formulario = document.getElementById("miFormulario");

window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener("click", validarDatos,false);
}

//veridicar elementos del formulario

function validarNombre(){

    //acceder al elemento
    var nom = document.getElementById("nombre");
    if(nom.value == ""){
        alert("El campo Nombre no debe estar vacío");
        return false;
    }
        return true;
}

function validarApellidos(){

    //acceder al elemento
    var ape = document.getElementById("apellidos");
    if(ape.value == ""){
        alert("El campo Apellidos no debe estar vacío");
        return false;
    }
        return true;
}

function validarTXT(){
    
    //acceder al elemento
    var texto = document.getElementById("txt");
    if(texto.value == ""){
        alert(" Debe dejarnos un mensaje :) ");
        return false;
    }
        return true;
}



//validación final
function validarDatos(e){
    if(validarNombre()&&validarApellidos()&&validarTXT()&&confirm("¿Desea enviar el formulario?")){
        return  true;
    }
    else{
        //Evento detener acción por default
        e.preventDefault();
        return false;
    }


}
