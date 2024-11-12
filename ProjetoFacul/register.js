document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('client-password').value;
    const confirmPassword = document.getElementById('client-confirm-password').value;
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }
    const client = {
        name: document.getElementById('client-name').value,
        email: document.getElementById('client-email').value,
        password: password,
    };
    // Simular salvamento do cliente em um banco de dados
    console.log('Novo cliente cadastrado:', client);
    alert('Cadastro realizado com sucesso!');
    document.getElementById('register-form').reset();
    // Redirecionar para a página de login
    window.location.href = 'login.html';
});