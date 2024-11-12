document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "admin" && password === "senha") {
        alert("Login bem-sucedido!");
        window.location.href = "home.html";
    } else {
        document.getElementById('message').textContent = "Usuário ou senha incorretos!";
    }
});