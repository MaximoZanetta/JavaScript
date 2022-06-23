
const boton = document.querySelector('.modal-btn');
boton.addEventListener('click',()=>{
    let showLoading = function (){
        Swal.fire({
            html: `<h3>Cargando...</h3>`,
            timer: 3000,
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: ()=>{
                Swal.showLoading()
            }
        })
    
    }
    showLoading();
})

showLoading();
