const data = [
    {
        id: 1,
        modelo: "Toyota Corolla",
        año: 2020,
        descripción: "Un sedán compacto confiable y eficiente en combustible.",
        stock: 12,
        precio: 20000,
        imagen: "https://img.remediosdigitales.com/e5d8bc/toyota-corolla-2020_/1366_2000.jpg",
        quantity: 0,
    },
    {
        id: 2,
        modelo: "Ford Mustang",
        año: 2022,
        descripción: "Un icónico deportivo con gran potencia y diseño agresivo.",
        stock: 5,
        precio: 45000,
        imagen: "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2022/nameplate/mustang/ford-mustang-2022-auto-deportivo-potencia-eficiencia-equipamiento-velocidad.jpg"
    },
    {
        id: 3,
        modelo: "Honda Civic",
        año: 2019,
        descripción: "Un coche compacto con un diseño moderno y excelente economía de combustible.",
        stock: 8,
        precio: 18000,
        imagen: "https://img.remediosdigitales.com/bd57b6/civic-1/840_560.jpg"
    },
    {
        id: 4,
        modelo: "Tesla Model 3",
        año: 2021,
        descripción: "Sedán eléctrico con gran autonomía y tecnología avanzada.",
        stock: 7,
        precio: 55000,
        imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_680ca0f19ee2418f872d9864c11c4fc6.webp"
    },
    {
        id: 5,
        modelo: "Chevrolet Silverado",
        año: 2020,
        descripción: "Una camioneta robusta con gran capacidad de carga.",
        stock: 4,
        precio: 35000,
        imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_62650e1de3d142dda3a9153ab7a66ce0.jpg"
    },
    {
        id: 6,
        modelo: "BMW X5",
        año: 2021,
        descripción: "SUV de lujo con gran rendimiento y tecnología de punta.",
        stock: 3,
        precio: 60000,
        imagen: "https://img.motoryracing.com/noticias/portada/31000/31345-n.jpg"
    },
    {
        id: 7,
        modelo: "Mazda CX-5",
        año: 2018,
        descripción: "SUV compacto con un excelente balance entre estilo y comodidad.",
        stock: 6,
        precio: 25000,
        imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_7acdf4eb141a4abcb51846e7e13acce4.jpg"
    },
    {
        id: 8,
        modelo: "Jeep Wrangler",
        año: 2022,
        descripción: "Vehículo todo terreno con capacidades extremas y diseño icónico.",
        stock: 9,
        precio: 40000,
        imagen: "https://jmautomotriz.mx/wp-content/uploads/2022/07/01-Jeep-Sahara-Blanco-2022.jpeg"
    },
    {
        id: 9,
        modelo: "Audi A4",
        año: 2020,
        descripción: "Sedán de lujo con un diseño elegante y tecnología avanzada.",
        stock: 5,
        precio: 48000,
        imagen: "https://img.remediosdigitales.com/d46bf6/audi-a4-2020-precio-mexico_/840_560.jpg"
    },
    {
        id: 10,
        modelo: "Hyundai Tucson",
        año: 2021,
        descripción: "SUV moderna con gran espacio y una conducción suave.",
        stock: 10,
        precio: 27000,
        imagen: "https://www.hyundai.com/content/dam/hyundai/template_en/en/images/find-a-car/pip/tucson-2021/highlights/gallery/tucson-nx4-highlights-gallery-01-pc.jpg"
    }
];



let productoid = window.location.search.split("=")[1]

const productoInfo = data.find((producto) => producto.id == productoid)

cardIndividualCard = [`
            <img class="product-card-img" src="${productoInfo.imagen}" alt="">
            <div class="contain-information-card">
                <h2 class="product-card-title">${productoInfo.modelo}</h2>
                <p class="product-card-description">${productoInfo.descripción}</p>
                <p class="product-card-year">Año: ${productoInfo.año}</p>
                <p class="product-card-pricing">${productoInfo.precio}$</p>
                <p class="product-card-stock">!!Solo quedan ${productoInfo.stock}!!</p>
                ${localStorage.getItem("usuario") ? `<label for="number">Cantidad:</label> <div class="add-and-decrease"><button class="add-and-decrease-button" onclick="increaseItem()">+</button> <input class="input_number" id="number" type="number" min="1" max="${productoInfo.stock}" name="" > <button class="add-and-decrease-button" onclick="decreaseItem()">-</button></div> <div class="button"><button onclick="addItems()" class="product-card-comprar">Comprar</button></div>` : `<a href="login.html" class="product-card-comprar-link">Iniciar sesión para comprar</a></div>`}
            </div>
            `]

document.querySelector("#card").innerHTML = cardIndividualCard.join("").replaceAll(",", "");

/* increase item */
document.querySelector("#number").value = 1
let counter = document.querySelector("#number")

function increaseItem(){
    const idProduct = Number(window.location.search.split("=")[1])
    const product = data.find(item => item.id === idProduct)

    if (product.stock > counter.value) {
        counter.value = Number(counter.value) + 1
    }
}

function decreaseItem(){
    if (1 < counter.value) {
        counter.value = Number(counter.value) - 1
    }
}

/* Carrito */

function addItems(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    const idProduct = Number(window.location.search.split("=")[1])
    const product = data.find(item => item.id === idProduct)
    const existeIdEnCart = cart.some(item => item.product.id === idProduct)

    if (existeIdEnCart) {
        cart = cart.map(item => {
            if (item.product.id === idProduct) {
                return { ... item, quantity : item.quantity + Number(counter.value) }
            } else{
                return item;
            }
        })
    } else{
        cart.push({ product: product, quantity: Number(counter.value) })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    document.querySelector("#number").value = 1

    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)

    localStorage.setItem("quantity", JSON.stringify(quantity))

    Toastify({
        text:"Felicidades te endeudaste de por vida 😏",
        style:{
            background: "#DB5079"
        },
    }
    ).showToast()
}