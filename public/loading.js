window.addEventListener('load',()=>{
    let boton = document.getElementById('detalles')
    boton.addEventListener('click',()=>{
        let loader = document.querySelector('.loader')
        loader.classList.toggle('esconder')
    })
})