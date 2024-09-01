function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#C94916'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#628A81'
    }else {
        img.src='noite.jpg'
        document.body.style.background = '#8769A3'
    }
}