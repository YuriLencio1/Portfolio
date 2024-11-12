function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var timeDiv = document.getElementById('time');
    var tempDiv = document.getElementById('temp');
    function atualizarHorario() {
        var data = new Date();
        var hora = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();

        timeDiv.innerHTML = `Agora são ${hora}:${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`;
        if (hora >= 0 && hora < 12) {

            img.src = 'imgs/images.png';
        } else if (hora >= 12 && hora < 18) {

            img.src = 'imgs/tarde.png';
        } else {

            img.src = 'imgs/noite.png';
        }
    }
    function atualizarTemperatura() {
        // Simulação de temperatura (em um projeto real, usar de uma API de clima)
        var temperatura = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
        tempDiv.innerHTML = `Temperatura: ${temperatura}°C`;
    }
    atualizarHorario();
    atualizarTemperatura();
    setInterval(atualizarHorario, 1000);
    setInterval(atualizarTemperatura, 60000);
}