function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotdobebe.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotdojovem.jpg')
            } else if (idade < 51) {
                //Adulto
                img.setAttribute('src', 'fotdoaduulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotdoisodo.jpg')
            }
        }else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 51) {
                //Adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}