$(document).ready(function () {
    $("#form-modal").submit(function(event){
        event.preventDefault(); // Prevenir comportamiento predeterminado del formulario
    let nombre = $("#nombreM").val().trim();
    // Seleccionamos el input nombre, el metodo val() retorna el valor del input, el metodo trim() corta los espacios en blanco al principio y al final del string

    let apellido = $("#apellidoM").val().trim(); 
    //let telefonoM = $("#telefonoM").val().trim();  //si agrego esta variable, deja de funcionar todo el codigo del js
    let email = $("#emailM").val().trim();
    let mensaje = $("#mensajeM").val().trim();

    // Realizamos lo mismo para cada campo

    // Validacion nombre
    if(nombre ===""){
        $("#nombreM").addClass("campo-invalido");
    // Si el campo nombre esta vacio, se agrega una clase nueva al input
        $("#mensaje-error-nombreM").removeClass("d-none")
    // Tambien se remueve la clase d-none del parrafo de mensaje de error
    } else {
        $("#nombreM").removeClass("campo-invalido");
        $("#mensaje-error-nombreM").addClass("d-none");
        // Si el input se envia correctamente, se remueven las clases que no son necesarias, y se agrega la clase d-none al parrafo de error
    };

    // Validacion apellido
    if(apellido ===""){
        $("#apellidoM").addClass("campo-invalido");
        $("#mensaje-error-apellidoM").removeClass("d-none");
    } else {
        $("#apellidoM").removeClass("campo-invalido");
        $("#mensaje-error-apellidoM").addClass("d-none");
    };

    /*if(telefonoM ===""){
        $("#telefonoM").addClass("campo-invalido");
        $("#mensaje-error-telefonoM").removeClass("d-none");
    } else {
        $("#telefonoM").removeClass("campo-invalido");
        $("#mensaje-error-telefonoM").addClass("d-none");
    }; */

    // Validacion email
    if(email ===""){
        $("#emailM").addClass("campo-invalido");
        $("#mensaje-error-emailM").removeClass("d-none");
    } else {
        $("#emailM").removeClass("campo-invalido");
        $("#mensaje-error-emailM").addClass("d-none");
    };

    // Validacion mensaje

    if(mensaje ===""){
        $("#mensajeM").addClass("campo-invalido");
        $("#mensaje-error-mensajeM").removeClass("d-none");
    } else {
        $("#mensajeM").removeClass("campo-invalido");
        $("#mensaje-error-mensajeM").addClass("d-none");
    };



    })
})