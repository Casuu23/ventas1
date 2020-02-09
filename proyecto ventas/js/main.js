let cont_menu = document.getElementById('cont-menu-mobil')
let btn_abrir_menu = document.getElementById('btn-abrir-menu')
let btn_cerrar_menu = document.getElementById('btn-cerrar-menu')



btn_abrir_menu.addEventListener('click', () => {
    cont_menu.classList.remove('ocultar-menu')
    btn_abrir_menu.style.display = 'none'
    btn_cerrar_menu.style.display = 'block'
    btn_cerrar_menu.style.position = 'initial'
})

btn_cerrar_menu.addEventListener('click', () => {
    cont_menu.classList.add('ocultar-menu')
    btn_abrir_menu.style.display = 'block'
    btn_cerrar_menu.style.display = 'none'
    btn_abrir_menu.style.position = 'initial'
})