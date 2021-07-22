var vel = 50

console.log(`a velocidade do seu carro é ${vel}Km/h`)

if (vel > 60) { //condição simples
    console.log(`voce ultrapassou a velocidade permitida. MULTADO`)
}

console.log('dirija sempre usando cinto de segurança')

console.log('---------------------------------------------------')

var pais = 'EUA'

if (pais == 'Brasil') { //condiçao composta
    console.log('Brasileiro')
} else {
    console.log('estrangeiro')
}

if (pais == 'Argentina') {
    console.log('bandeira azul')
} else if (pais =='Brasil') {
    console.log('bandeira verde')
} else {
    console.log('Bandeira nao identificada')
}

console.log('---------------------------------------------')

var dia = new Date()
var diaSem = dia.getDay()
console.log(diaSem)

switch (diaSem) {
    case 2:
        console.log('segunda')
        break;
    case 3:
        console.log('terça')
        break;
    case 4:
        console.log('quarta')
        break;
    case 5:
        console.log('quinta')
        break;
    case 6:
        console.log('sexta')
        break;
    case 7:
        console.log('sabado')
        break;
    default:
        console.log('domingo')
        break;
}