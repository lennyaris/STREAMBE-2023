function obtenerValor(){
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let email = document.getElementById("Email").value;
    let generos = document.querySelector('input[type=radio][name="Indique su genero"]:checked');
    let genero = generos.value;
    let edades = document.getElementById("Edades").value;
    let argentinos = document.querySelector('input[type=checkbox][name="argentino"]');
    if (argentinos.checked){
        var argentino = "Es campeon del Mundo";
    }else var argentino = ("No es campeon del Mundo")
    submit.onclick=() => {console.log(nombre, apellido, email, genero, edades, argentino)};
        alert("El formulario fue enviado correctamente")
}



