
// function sinRegistrarse(){
//     const userName = document.getElementsByTagName("label").value;

//     if(userName == "" ){
//         sinRegistrarse();
//     }
//     else {
//     const user = document.getElementById("userName");
//     user.innerHTML = `<strong>user: </strong>${nombre}`
//     }
// }


// sinRegistrarse();

      
          

        

const abrir = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const cerrar = document.querySelector(".modal-cerrar");

abrir.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal-show");
    sinRegistration();
})

cerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal-show");
})


// const usuario = document.getElementsByClassName("input-name").value;
//           const user = document.getElementById("userName");
//           user.innerHTML = `<strong>user: </strong>${usuario}`;
//           console.log(usuario);

const form = document.getElementById('form');
const user = document.getElementById('name')
const button = document.getElementById('button');
const nombreDeUsuario = document.getElementById('username');

function sinRegistration(){

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        nombreDeUsuario.innerHTML = "";
        nombreDeUsuario.innerHTML = `<strong>user: </strong>${user.value}`;
        console.log(user.value)
        
    })
    return user.value;
}


