$(document).ready(function () {
    $("#contactoForm").submit(function(event){
        event.preventDefault(); // Prevenir comportamiento predeterminado del formulario
    let nombre = $("#nombre").val().trim();
    // Seleccionamos el input nombre, el metodo val() retorna el valor del input, el metodo trim() corta los espacios en blanco al principio y al final del string

    let apellido = $("#apellido").val().trim();
    let email = $("#email").val().trim();
    let mensaje = $("#mensaje").val().trim();
    
    // Realizamos lo mismo para cada campo

    // Validacion nombre
    if(nombre ===""){
        $("#nombre").addClass("campo-invalido");
    // Si el campo nombre esta vacio, se agrega una clase nueva al input
        $("#mensaje-error-nombre").removeClass("d-none")
    // Tambien se remueve la clase d-none del parrafo de mensaje de error
    } else {
        $("#nombre").removeClass("campo-invalido");
        $("#mensaje-error-nombre").addClass("d-none");
        // Si el input se envia correctamente, se remueven las clases que no son necesarias, y se agrega la clase d-none al parrafo de error
    }

    // Validacion apellido
    if(apellido ===""){
        $("#apellido").addClass("campo-invalido");
        $("#mensaje-error-apellido").removeClass("d-none");
    } else {
        $("#apellido").removeClass("campo-invalido");
        $("#mensaje-error-apellido").addClass("d-none");
    };

    // Validacion email
    if(email ===""){
        $("#email").addClass("campo-invalido");
        $("#mensaje-error-email").removeClass("d-none");
    } else {
        $("#email").removeClass("campo-invalido");
        $("#mensaje-error-email").addClass("d-none");
    };

    // Validacion mensaje

    if(mensaje ===""){
        $("#mensaje").addClass("campo-invalido");
        $("#mensaje-error-mensaje").removeClass("d-none");
    } else {
        $("#mensaje").removeClass("campo-invalido");
        $("#mensaje-error-mensaje").addClass("d-none");
    };
    })
})