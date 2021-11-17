function rendaFixa() {
    document.getElementById("rF").style.display = "block"
    document.getElementById("0").style.display = "none"
    document.getElementById("back").style.display = "block"
    document.getElementById("1").style.display = "none"
    
}
function voltar() {
    document.getElementById("rF").style.display = "none"
    document.getElementById("0").style.display = "block"
    document.getElementById("back").style.display = "none"
    document.getElementById("1").style.display = "block"
}
function changeColor(arg) {
    var x = document.getElementById(arg)
    x.style.backgroundColor = "rgba(1, 66, 1, 0.932)" 
}

function colorBack(arg) {
     var y = document.getElementById(arg)
     y.style.backgroundColor = "rgba(0, 128, 0, 0.932)"
}


function calcular() {
    var vi = parseFloat(document.getElementById("inicial").value)
    var vm = parseFloat(document.getElementById("mensal").value)
    var periodo = parseFloat(document.getElementById("tempo").value)
    var resultado = document.getElementById("res")
    var poupanca = document.getElementById("i1")
    var nubank = document.getElementById("i2")
    var inter = document.getElementById("i3")
    var pagBank = document.getElementById("i4")
    var pay99 = document.getElementById("i5")

    if(poupanca.checked) {
        taxaCdi = 70
        document.getElementById("cdi").value = "70"
    }else if (nubank.checked) {
        taxaCdi = 100
        document.getElementById("cdi").value = "100"
    }else if (inter.checked) {
        taxaCdi = 100
        document.getElementById("cdi").value = "100"
    }else if (pagBank.checked) {
        taxaCdi = 200
        document.getElementById("cdi").value = "200"
    }else if (pay99.checked) {
        taxaCdi = 220
        document.getElementById("cdi").value = "220"
    }else {
        var taxaCdi = parseFloat(document.getElementById("cdi").value)
    }

    if(poupanca.checked) {
        taxaCdi = 70
        
    }else if (nubank.checked) {
        taxaCdi = 100
        
    }else if (inter.checked) {
        taxaCdi = 100
        
    }else if (pagBank.checked) {
        taxaCdi = 200
    }else if (pay99.checked) {
        taxaCdi = 220
    }

    var cdi = taxaCdi/100;
    //-----------------------------
    //calculo da Taxa Selic
    var selic = 7.75;
    var selicAno = selic * cdi   
    var selicMes = selicAno / 12
    //var selicDia = selicMes / 30    
    
    var selicMesC = selicMes / 100
    //var selicDiaC = selicDia / 100
    //-------------------------------------
    // Calculo de juros composto ()
    //var sElevada = Math.pow(selicMesC + 1, 12)
    var s = selicMesC + 1
    
    //-------------------------------------
    var valor = vi
    
    for(var i = 1; i <= periodo; i++) {
        valor = valor * s + vm
        
    }
    var montante = valor.toFixed(2)

    var lucro = (valor - vi - (vm * periodo)).toFixed(2)
    //var lMes = (selicMesC * vi).toFixed(2)
    //var lDia = (selicDiaC * vi).toFixed(2)
        
        

    
    resultado.innerHTML =   "<p><b> Capital Obtido: </b> R$" + montante + " <b>Lucro: </b>R$" + lucro + "</p>"
    
}