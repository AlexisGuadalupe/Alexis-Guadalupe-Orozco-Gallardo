let productContainer = document.getElementById("product-container-title").innerText = ("Card");
let cardArray = [];
cardArray.join().replaceAll(",","");

/* <=========================== Producto 1 ========================> */
let title;
let pricing;
let description;

for (let i = 1; i < 10; i++) {
    if (i == 1) {
        title = "BMW M5"
        pricing = 500
        description = "xd"
    } else if (i == 2) {
        title = "nose"
        pricing = 4000
        description = "no se parece un ferrari"
    } else if (i == 3) {
        title = "GTA 5"
        pricing = 50000
        description = "Pov:"
    }
    else{
        title = "Gta 5"
        pricing = 500
        description = "xd"
    }

    cardArray.push(`
        <div class="product-item">
            <img class="product-img" id="" src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="">
            <h3 class="product-title" id="">${title}</h3>
            <p class="product-pricing" id="">${pricing}</p>
            <p class="product-description" id="">${description}</p>
            <div class="produc-button-container">
                <a href="pages/productos/producto${i}.html" class="product-button">Ver mas</a>
            </div>
        </div>`);
    document.getElementById("product-container").innerHTML = cardArray.join().replaceAll(",","");
}