function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','caminhodafoto')
            } else if (idade < 21) {
                img.setAttribute('src','caminhodafoto')
            } else if (idade < 50){
                img.setAttribute('src','caminhodafoto')
            } else {
                img.setAttribute('src','caminhodafoto')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','caminhodafoto')
            } else if (idade < 21) {
                img.setAttribute('src','caminhodafoto')
            } else if (idade < 50){
                img.setAttribute('src','caminhodafoto')
            } else {
                img.setAttribute('src','caminhodafoto')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}