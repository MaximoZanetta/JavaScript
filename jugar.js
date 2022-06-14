
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
})

cerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal-show");
})


const usuario = document.getElementsByClassName("input-name").value;
          const user = document.getElementById("userName");
          user.innerHTML = `<strong>user: </strong>${usuario}`;
          console.log(usuario);