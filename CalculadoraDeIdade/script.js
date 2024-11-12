function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#textAno')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[Error] Verifique os dados')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
        } else if (fsex[1].checked) {
            genero = 'mulher'
        } else if (fsex[2].checked) {
            genero = 'LGBT'
        }  
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 


    }
    
}