//var nome = window.prompt('Qual o seu nome ?')
var nome = 'EDUARDO'
var int=self.setInterval(function(){carregar()},1000);

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacoes = window.document.getElementById('saudacoes')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (hora <= 9) {
        hora = '0' + hora
    }
    if (minutos <= 9) {
        minutos = '0' + minutos
    }
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/03/melhor-horario-para-treinar-manha.jpg'
        document.body.style.background = '#e2cd9f'
        saudacoes.innerHTML = '<strong>Bom dia!</strong> ' + nome.toUpperCase()
        saudacoes.style.color = '#e2cd9f'
    } else if (hora >= 12 && hora <18) {
        img.src = 'http://www.dvisio.com.br/imagem.php?id=260'
        document.body.style.background = '#b9846f'
        saudacoes.innerHTML = '<strong>Boa noite!</strong> ' + nome.toUpperCase()
        saudacoes.style.color = '#b9846f'
    } else {
        img.src = 'http://www.contosliterarios.com.br/tim.php?src=uploads/images/2017/10/uma-noite-em-paris-1507761176.png&w=1600&h=800'
        document.body.style.background = '#515154'
        saudacoes.innerHTML = '<strong>Boa noite!</strong> ' + nome.toUpperCase()
        saudacoes.style.color = '#515154'
    }
}