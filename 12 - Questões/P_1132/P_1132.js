// Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 
// entre X e Y, incluindo ambos.

//     Entrada
// O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.

//     Saída
// Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, 
// inclusive ambos se for o caso.

// Exemplo de entrada	        Exemplo de saída

// 100                          13954
// 200

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

let min = Math.min(x, y);
let max = Math.max(x, y);

let sum = 0;

const result = Array.from({ length: max - min + 1 }, (_, i) => min + i).reduce((acc, cur) => {
    if (cur % 13 !== 0) {
        acc += cur;
    }
    return acc;
}, sum);

console.log(result);