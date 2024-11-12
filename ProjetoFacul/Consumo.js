function Dividir() {
    var t1 = window.document.querySelector('input#Kms')
    var t2 = window.document.querySelector('input#Litros')
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var s = n1 / n2

    res.innerHTML = `seu carro esta fazendo ${s.toFixed(1)}km por litro`



}