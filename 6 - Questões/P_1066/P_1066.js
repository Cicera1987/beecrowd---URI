var input = require('fs').readFileSync('stdin', 'utf8');

var num = input.split("\n").map(item => parseInt(item));


let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        par += 1;
    }
    if (num[i] % 2 !== 0 && num[i] !== 0) {
        impar += 1;
    }
}

for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        positivo += 1;
    }
    if (num[i] < 0) {
        negativo += 1;
    }
}

console.log(`${par} valor(es) par(es)\n${impar} valor(es) impar(es)\n${positivo} valor(es) positivo(s)\n${negativo} valor(es) negativo(s)`);
