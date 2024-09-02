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
                img.setAttribute('src', 'criancaHomem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'JovemHomem.png')
            } else if (idade < 51) {
                //Adulto
                img.setAttribute('src', 'AdultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoHomem.png')
            }
        }else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaMulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'JovemMulher.png')
            } else if (idade < 51) {
                //Adulto
                img.setAttribute('src', 'adultoMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoMulher.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        
    }
}