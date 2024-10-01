let categoriasPrimaryNavbar = [
    { content: "inicio", href: "index.html"},
    { content: "Ofertas", href: "Ofertas.mtml"}
]

let menuArray1 = []

for (const menu of categoriasPrimaryNavbar) {
    menuArray1.push(`<li class="main-nav-item"><a class="main-nav-link" href="${menu.href}">${menu.content}</a></li>`)
    document.querySelector("#primary-nav").innerHTML = menuArray1.join().replaceAll(",", "");
}

/* secondary navbar <==================================================================================> */

let categoriasSecondaryNavbar = [
    { content: "Carrito", href: "carrito.html"},
    { content: "Ingresar", href: "loging.html"}
]

let menuArray2 = []

for (const menu of categoriasSecondaryNavbar) {
    
}
