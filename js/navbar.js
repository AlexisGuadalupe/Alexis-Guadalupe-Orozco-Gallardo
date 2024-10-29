let categoriasPrimaryNavbar = [
    { content: "inicio", href: "http://127.0.0.1:5501/index.html"},
    { content: "Ofertas", href: "Ofertas.mtml"}
]
    
let menuArray1 = []
    
for (const menu of categoriasPrimaryNavbar) {
    menuArray1.push(`<li class="main-nav-item"><a class="main-nav-link" href="${menu.href}">${menu.content}</a></li>`)
}

/* secondary navbar <==================================================================================> */


let categoriasSecondaryNavbar = [
    { content: "Carrito", href: "carrito.html"},
    /* { content: "Ingresar", href: "pages/loging.html"} */
]

let menuArray2 = []
    
for (const menu2 of categoriasSecondaryNavbar) {
    menuArray2.push(`<li class="carrito-and-login-item"><a href="${menu2.href}" class="carrito-and-login-link">${menu2.content}</a></li>`)
}



/* Estructura de la navbar */

function unionDelaNavbar(){
    let navbarCompleta = [
        `<div class="img all-width"><a href="../index.html">
            <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="29"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><mask id="d" fill="#fff"><use xlink:href="#b"/></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"/><mask id="g" fill="#fff"><use xlink:href="#e"/></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"/></svg>
            </a>
        </div>
    
        <nav class="main-nav">
            <ul id="primary-nav" class="main-nav-list">
                ${menuArray1}
            </ul>
        </nav>
    
        <nav class="carrito-and-login all-width">
            <ul id="secundary-nav" class="carrito-and-login-list">
            ${menuArray2} ${localStorage.getItem("usuario") ? `<li class="carrito-and-login-link" style="color: #fff;">Hola ${localStorage.getItem("usuario")}</li> <li><button onclick="localStorage.clear();">Cerrar sesión</button></li>` : `<li class="carrito-and-login-item"><a href="../pages/loging.html" class="carrito-and-login-link">Ingresar</a></li>`}
            </ul>
        </nav>
        `
    ]
    
    document.querySelector("header").innerHTML = navbarCompleta.join().replaceAll(",", "");
}

unionDelaNavbar()
