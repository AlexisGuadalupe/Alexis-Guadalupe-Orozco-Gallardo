const data = [
    {
        id: 1,
        modelo: "Toyota Corolla",
        año: 2020,
        descripción: "Un sedán compacto confiable y eficiente en combustible.",
        stock: 12,
        precio: 20000,
        imagen: "https://img.remediosdigitales.com/e5d8bc/toyota-corolla-2020_/1366_2000.jpg",
        categoría: "sedan"
    },
    {
        id: 2,
        modelo: "Ford Mustang",
        año: 2022,
        descripción: "Un icónico deportivo con gran potencia y diseño agresivo.",
        stock: 5,
        precio: 45000,
        imagen: "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2022/nameplate/mustang/ford-mustang-2022-auto-deportivo-potencia-eficiencia-equipamiento-velocidad.jpg",
        categoría: "deportivo"
    },
    {
        id: 3,
        modelo: "Honda Civic",
        año: 2019,
        descripción: "Un coche compacto con un diseño moderno y excelente economía de combustible.",
        stock: 8,
        precio: 18000,
        imagen: "https://img.remediosdigitales.com/bd57b6/civic-1/840_560.jpg",
        categoría: "sedan"
    },
    {
        id: 4,
        modelo: "Tesla Model 3",
        año: 2021,
        descripción: "Sedán eléctrico con gran autonomía y tecnología avanzada.",
        stock: 7,
        precio: 55000,
        imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_680ca0f19ee2418f872d9864c11c4fc6.webp",
        categoría: "sedan"
    },
    {
        id: 5,
        modelo: "Chevrolet Silverado",
        año: 2020,
        descripción: "Una camioneta robusta con gran capacidad de carga.",
        stock: 4,
        precio: 35000,
        imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_62650e1de3d142dda3a9153ab7a66ce0.jpg",
        categoría: "camioneta"
    },
    {
        id: 6,
        modelo: "BMW X5",
        año: 2021,
        descripción: "SUV de lujo con gran rendimiento y tecnología de punta.",
        stock: 3,
        precio: 60000,
        imagen: "https://img.motoryracing.com/noticias/portada/31000/31345-n.jpg",
        categoría: "suv"
    },
    {
        id: 7,
        modelo: "Mazda CX-5",
        año: 2018,
        descripción: "SUV compacto con un excelente balance entre estilo y comodidad.",
        stock: 6,
        precio: 25000,
        imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_7acdf4eb141a4abcb51846e7e13acce4.jpg",
        categoría: "suv"
    },
    {
        id: 8,
        modelo: "Jeep Wrangler",
        año: 2022,
        descripción: "Vehículo todo terreno con capacidades extremas y diseño icónico.",
        stock: 9,
        precio: 40000,
        imagen: "https://jmautomotriz.mx/wp-content/uploads/2022/07/01-Jeep-Sahara-Blanco-2022.jpeg",
        categoría: "todoTerreno"
    },
    {
        id: 9,
        modelo: "Audi A4",
        año: 2020,
        descripción: "Sedán de lujo con un diseño elegante y tecnología avanzada.",
        stock: 5,
        precio: 48000,
        imagen: "https://img.remediosdigitales.com/d46bf6/audi-a4-2020-precio-mexico_/840_560.jpg",
        categoría: "sedan"
    },
    {
        id: 10,
        modelo: "Hyundai Tucson",
        año: 2021,
        descripción: "SUV moderna con gran espacio y una conducción suave.",
        stock: 10,
        precio: 27000,
        imagen: "https://www.hyundai.com/content/dam/hyundai/template_en/en/images/find-a-car/pip/tucson-2021/highlights/gallery/tucson-nx4-highlights-gallery-01-pc.jpg",
        categoría: "suv"
    }
];

/* <============================== apartir de aca comienza la magia ===========================> */
function crearCards(){
    
    let cardArray = data.map((carro) => (
        `<div class="product-item">
            <img class="product-img" id="" src="${carro.imagen}" alt="">
            <h3 class="product-title" id="">${carro.modelo}</h3>
            <p class="product-pricing" id="">${carro.precio}</p>
            <p class="product-description" id="">${carro.descripción}</p>
            <div class="produc-button-container">
                <a href="./producto.html?prod=${carro.id}" class="product-button">Ver mas</a>
            </div>
        </div>`
    ));
    
    document.querySelector("#product-container").innerHTML = cardArray.join("").replaceAll(",", "");
}
crearCards();

/* borrar todo */

let seachInput = document.querySelector("#search-text-box")

function deleteAllContentOfTheInput(){
    seachInput.value = ""
}

/* Buscador */

let seachInputValue = document.querySelector("#search-text-box")

const search = () => {
    const filter = data.filter((productos) => productos.modelo.toLowerCase() === seachInputValue.value.toLowerCase())

    if (filter.length === 1) {
        let cardSearch = filter.map((producto) => (
            `<div class="product-item">
                <img class="product-img" id="" src="${producto.imagen}" alt="">
                <h3 class="product-title" id="">${producto.modelo}</h3>
                <p class="product-pricing" id="">${producto.precio}</p>
                <p class="product-description" id="">${producto.descripción}</p>
                <div class="produc-button-container">
                    <a href="./producto.html?prod=${producto.id}" class="product-button">Ver mas</a>
                </div>
            </div>`
        ));
        
        document.querySelector("#product-container").innerHTML = cardSearch.join("").replaceAll(",", "");
    } else {
        alert("No se encontró nd")
    }
}

const categoryFunction = (category) => {
    const filterCategory = data.filter((productos) => productos.categoría === category);

    if (filterCategory.length >= 1) {
        let cardSearchCategory = filterCategory.map((producto) => (
            `<div class="product-item">
                <img class="product-img" id="" src="${producto.imagen}" alt="">
                <h3 class="product-title" id="">${producto.modelo}</h3>
                <p class="product-pricing" id="">${producto.precio}</p>
                <p class="product-description" id="">${producto.descripción}</p>
                <div class="produc-button-container">
                    <a href="./producto.html?prod=${producto.id}" class="product-button">Ver más</a>
                </div>
            </div>`
        ));
        
        document.querySelector("#product-container").innerHTML = cardSearchCategory.join("").replaceAll(",", "");
    }
}