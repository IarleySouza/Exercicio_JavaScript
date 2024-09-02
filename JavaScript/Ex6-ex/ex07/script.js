function tabuada() {
    var cont = 0
    var nu = document.getElementById('numero')
    var res = document.getElementById('res')
    while (cont <= 10) {
        var tab = cont * Number(nu.value)
        res.innerHTML = `${nu.value} x ${cont} = ${tab}`
        cont++
        
    }
    
    
}