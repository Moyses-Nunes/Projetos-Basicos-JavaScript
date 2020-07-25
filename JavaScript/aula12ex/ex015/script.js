function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e informe novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // criança
                genero = 'um menino'
                img.setAttribute('src', 'kidh.png')
            } else if (idade < 18) {
                // adolescente
                genero = 'um adolescente'
                img.setAttribute('src', 'jh.png')
            } else if (idade < 60) {
                // adulto
                genero = 'um adulto'
                img.setAttribute('src', 'adulto.png')
            } else {
                // idoso
                genero = 'um idoso'
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // criança
                genero = 'uma menina'
                img.setAttribute('src', 'kidm.png')
            } else if (18 > idade) {
                // adolescente
                genero = 'uma adolescente'
                img.setAttribute('src', 'jm.png')
            } else if (60 > idade) {
                // adulto
                genero = 'uma adulta'
                img.setAttribute('src', 'adulta.png')
            } else {
                // idoso
                genero = 'uma idosa'
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}