const cartContainer = document.querySelector("#card-container")

function getCart(cards){
    const list = cards.map(
        card => `<div class="card border shadow-none">
        <div class="card-body">
        <div class="d-flex align-items-start border-bottom pb-3">
            <div class="me-4">
          <img
            src="${card.product.imagen}"
            alt=""
            width="100px"
            class="avatar-lg rounded"
          />
          </div>
          <div class="flex-grow-1 overflow-hidden">
          <h5 class="text-truncate font-size-18">${card.product.modelo}</h5>
          <div class="row">
            <div class="col-md-4">
            <div class="mt-3">
              <p class="text-muted mb-2">Precio</p>
              <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
              <button onclick="deleteItem(${card.product.id})">Borrar</button>
            </div>
            
            </div>
            <div class="col-md-5">
            <div class="mt-3">
              <p class="text-muted mb-2">Cantidad</p>
              <h5 class="mb-0 mt-2">${card.quantity}</h5>
            </div>
            </div>
            <div class="col-md-3">
            <div class="mt-3">
              <p class="text-muted mb-2">Total</p>
              <h5>$${card.product.precio * card.quantity}</h5>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
                </div>`

        
    )
    cartContainer.innerHTML = list;
}

getCart(JSON.parse(localStorage.getItem("cart")))

function totalCart(cards){
    let cardTotal = document.querySelector("#total-de-compra");

    let total = cards.reduce(
        (acumulado, actual) => acumulado + actual.product.precio * actual.quantity, 0
    )

    cardTotal.innerText = "$" + total;
    
}
totalCart(JSON.parse(localStorage.getItem("cart")))


function clearCart(){
    localStorage.setItem("cart", JSON.stringify([]));
    getCart([]);
    totalCart([]);
    
    localStorage.setItem("quantity", 0);
}

function deleteItem(id){
    const cards = JSON.parse(localStorage.getItem("cart"))
    const newCards = cards.filter(card => card.product.id !== id)
    localStorage.setItem("cart", JSON.stringify(newCards))

    getCart(newCards)
    total(newCards)

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
    localStorage.setItem("quantity", quantity)
    const quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity;
}