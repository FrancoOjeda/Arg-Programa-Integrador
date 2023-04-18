$(document).ready(function() {
$("#form-modal").submit(function(event){
    event.preventDefault();

    let nombreModal = $("#nombreModal").val().trim();
    let apellidoModal = $("#apellidoModal").val().trim();
    let telefonoModal = $("#telefonoModal").val().trim();
    let emailModal = $("#emailModal").val().trim();
    let IDmodal = $("#IDmodal").val().trim();
    let mensajeModal = $("#mensajeModal").val().trim(); 

    if(nombreModal === ""){
        $("#nombreModal").addClass("campo-invalido");
        $("#mensaje-error-nombreM").removeClass("d-none")
    }
    else{
        $("#nombreModal").removeClass("campo-invalido");
        $("#mensaje-error-nombreM").addClass("d-none");
    };

    if(apellidoModal === ""){
        $("#apellidoModal").addClass("campo-invalido");
        $("##mensaje-error-apellidoM").removeClass("d-none");
    }
    else{
        $("#apellidoModal").removeClass("campo-invalido");
        $("#mensaje-error-apellidoM").addClass("d-none");
    };

    if(telefonoModal ===""){
        $("#telModal").addClass("campo-invalido");
        $("#mensaje-error-telefonoM").removeClass("d-none");
    }
    else{
        $("#telModal").removeClass("campo-invalido");
        $("#mensaje-error-telefonoM").addClass("d-none");
    };

    if(emailModal === ""){
        $("#emailModal").addClass("campo-invalido");
        $("#mensaje-error-emailM").removeClass("d-none")
    }
    else{
        $("#emailModal").removeClass("campo-invalido");
        $("#mensaje-error-emailM").addClass("d-none");
    };

    if(IDmodal === ""){
        $("#IDmodal").addClass("campo-invalido");
        $("#mensaje-error-nombreM").removeClass("d-none")
    }
    else{
        $("#IDmodal").removeClass("campo-invalido");
        $("#mensaje-error-nombreM").addClass("d-none");
    };

    if(mensajeModal === ""){
        $("#mensajeModal").addClass("campo-invalido");
        $("#mensaje-error-ID").removeClass("d-none")
    }
    else{
        $("#mensajeModal").removeClass("campo-invalido");
        $("#mensaje-error-mensajeM").addClass("d-none");
    };

})

})