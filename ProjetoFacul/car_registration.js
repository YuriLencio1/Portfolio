document.getElementById('new-car-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const car = {
        model: document.getElementById('car-model').value,
        brand: document.getElementById('car-brand').value,
        year: document.getElementById('car-year').value,
        price: document.getElementById('car-price').value,
        image: document.getElementById('car-image').value,
    };
    // Simular salvamento do carro em um banco de dados
    console.log('Novo carro cadastrado:', car);
    alert('Carro cadastrado com sucesso!');
    document.getElementById('new-car-form').reset();
});