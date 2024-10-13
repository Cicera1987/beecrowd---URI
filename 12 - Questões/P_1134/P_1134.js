// Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre 
// eles cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.

// Entrada
// O arquivo de entrada contém 2 valores positivos inteiros quaisquer, 
// não necessariamente em ordem crescente.
//10
//18

// Saída
// Imprima todos os valores conforme exemplo abaixo, sempre em ordem crescente.
// 12
// 13
// 17

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.map(item => parseInt(item));

let min = Math.min(x, y);
let max = Math.max(x, y);

for (let i = min + 1; i < max; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}