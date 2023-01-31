//NAVEGACION DEL MENU
const menu = document.querySelector('.menu')
const nav = document.querySelector('.menu-navegacion')

menu.addEventListener('click', ()=>{
    nav.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(nav.classList.contains('spread')
    && e.target != nav && e.target != menu){
        console.log('cerrar')
        nav.classList.toggle("spread")
    }
})
