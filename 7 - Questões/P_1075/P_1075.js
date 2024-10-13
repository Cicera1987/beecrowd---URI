// Leia um valor inteiro N.
// Apresente todos os números entre 
// 1 e 10000 que divididos por N dão resto igual a 2.

// Entrada
// A entrada contém um valor inteiro N(N < 10000).

//     Saída
// Imprima todos valores que quando divididos por 
// N dão resto = 2, um por linha.
var input = require('fs').readFileSync('stdin', 'utf8');

var n = Number(input)

for (i = 1; i <= 10000; i++) {
    if (i % n == 2) {
        console.log(i)
    }
}

//tempo 3 minutos