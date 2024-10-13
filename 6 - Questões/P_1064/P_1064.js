
var input = require('fs').readFileSync('stdin', 'utf8');

var num = input.split("\n").map(item => parseFloat(item))
let numPositivo = 0
let soma = 0
let contador = 0

for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        numPositivo += 1;
        contador += 1;
        soma += num[i];
        media = soma / contador
    }

} console.log(`${numPositivo} valores positivos`)
console.log(`${media.toFixed(1)}`)

// tempo 12 minutos - pois a Uri estava dano erro de 20%