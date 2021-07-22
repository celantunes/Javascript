console.log('cria um array aleatorio de -9 a 9 contendo 10 posições')
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let array = [];
for (let i = 0 ; i < 10 ; i++){
  array.push(getRandom(-9,9));
}

console.log(array);

console.log('---------------------------')

console.log('escolhe um valor de um array aleatorio')
var myArray = ['January', 'February', 'March'];
console.log('array: [' + myArray + ']')
var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(rand)

console.log('------------------')
console.log('outra forma')
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
console.log(shuffle(myArray))
console.log(shuffle(myArray)[0])