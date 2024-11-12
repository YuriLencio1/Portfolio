
            function somar() {
                    var t1 = window.document.querySelector('input#text1')    
                    var t2 = window.document.querySelector('input#text2')           
                    var n1 = Number(t1.value)
                    var n2 = Number(t2.value)
                    var s = n1 + n2
                    res.innerHTML = `a soma entre ${n1} e ${n2} é ${s}`
                    /*
                    document.querySelector('.res').innerHTML = `a soma entre ${n1} e ${n2} é ${s}`
                */
            }

            function subtrair (){
                    var t1 = window.document.querySelector('input#text1')    
                    var t2 = window.document.querySelector('input#text2')           
                    var n1 = Number(t1.value)
                    var n2 = Number(t2.value)
                    var s = n1 - n2
                     res.innerHTML = `a subtração entre ${n1} e ${n2} é ${s}`



            }

            function multiplicar (){
                    var t1 = window.document.querySelector('input#text1')    
                    var t2 = window.document.querySelector('input#text2')           
                    var n1 = Number(t1.value)
                    var n2 = Number(t2.value)
                    var s = n1 * n2
                     res.innerHTML = `a subtração entre ${n1} e ${n2} é ${s}`



            }
            function Dividir (){
                    var t1 = window.document.querySelector('input#text1')    
                    var t2 = window.document.querySelector('input#text2')           
                    var n1 = Number(t1.value)
                    var n2 = Number(t2.value)
                    var s = n1 / n2
                     res.innerHTML = `a subtração entre ${n1} e ${n2} é ${s}`



            }
