let categorias = [
    { menu: "carito", href: "/productos/carrito.html"},
    { menu: "inicio", href: "index.html"}
]

menuArray = []

for (const menu of categorias) {
    let nav = (`<div>${categorias[0]}</div>`)
    document.querySelector("header").innerHTML = nav
}
