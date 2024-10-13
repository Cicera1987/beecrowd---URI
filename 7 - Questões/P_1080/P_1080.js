// Leia 100 valores inteiros.
// Apresente então o maior valor lido 
// e a posição dentre os 100 valores lidos.

//     Entrada
// O arquivo de entrada contém 100 números inteiros, 
// positivos e distintos.

//     Saída
// Apresente o maior valor lido e a posição de entrada, 
// conforme exemplo abaixo.
var input = require('fs').readFileSync('stdin', 'utf8');

let num = input.split("\n").map(item => parseInt(item))

let posicao = 0
let valorMaior = 0

for (i = 1; i <= 100; i++) {
    if (i == 1) {
        valorMaior = num[i];
        posicao = num[i];
    } else if (num[i] > valorMaior) {
        valorMaior = num[i]
        posicao = i + 1
    }
}

console.log(`${valorMaior}`)
console.log(`${posicao}`)

//tempo 23 minutos + 5 minutos para descobrir o erro