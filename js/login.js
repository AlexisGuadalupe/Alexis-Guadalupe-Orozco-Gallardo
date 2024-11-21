const credenciales = {
    email: "exaple@gmail.com",
    password: "123456",
    username: "Ususario 🗿"
};

function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    if (credenciales.email === email && credenciales.password === password && credenciales.username === username) {
        localStorage.setItem("usuario", username);
        localStorage.setItem("quantity", 0);
        localStorage.setItem("cart", JSON.stringify([]));
        window.location.href = "index.html";
    } else {
        alert("todo mal parece que no sos vos");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}

if (localStorage.getItem("usuario")) {
    window.location.href = "../index.html";
}