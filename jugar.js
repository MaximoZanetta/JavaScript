
function sinRegistrarse(){
    let nombre = prompt("Ingrese su nombre de usuario");
    

    if(nombre == "" ){
        sinRegistrarse();
    }
    else {
    const user = document.getElementById("userName");
    user.innerHTML = `<strong>user: </strong>${nombre}`
    }
}

sinRegistrarse()