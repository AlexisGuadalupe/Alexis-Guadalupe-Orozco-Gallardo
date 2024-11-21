	const cartContainer = document.querySelector("#card-container")

	function getCart(cards){
		const list = cards.map(
			card => `<div class="card bordes">
                            <div class="info-card">
                                <img class="car-image" src="${card.product.imagen}">
                            
                                <div class="container-cantidades-nombre">
                                    <h2 class="nombre-del-carro">${card.product.modelo}</h2> 
                                    <div class="cantidades">
                                    <div class="precio">
                                        <p>Precio</p>
                                        <h5>$${card.product.precio}</h5>
                                    </div>
                                    <div class="cantidad">
                                        <p>Cantidad</p>
                                        <h5>${card.quantity}</h5>
                                    </div>
                                    <div class="total">
                                        <p>Total</p>
                                        <h5>$${card.product.precio * card.quantity}</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                                <button onclick="deleteItem(${card.product.id})" class="delete-button">Borrar</button>
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


	function enviarDataDeCompra(){

		const recurso = {
			"name-order": localStorage.getItem("usuario"),
			"user": "user xd",
			"order": localStorage.getItem("cart")
		}
		
		fetch("https://67367b0daafa2ef222309f97.mockapi.io/orders", {
			method: "POST",
			body: JSON.stringify(recurso)
		}).then(response => response.json)
		.then(response => 
			Swal.fire({
			icon: "success",
			title: "Solicitus enviada",
			text: "No esperes el producto jajaj",
		})).catch(response =>
			Swal.fire({
			icon: "error",
			title: "oh no...",
			text: "Algo salio mal",
		}))

	}