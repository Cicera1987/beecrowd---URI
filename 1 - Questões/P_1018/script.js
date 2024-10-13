// Leia um valor inteiro. 
// A seguir, calcule o menor número de notas possíveis 
// (cédulas) no qual o valor pode ser decomposto. 
// As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
// A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de 
// notas de cada tipo necessárias, conforme o exemplo fornecido. 
// Não esqueça de imprimir o fim de linha após cada linha, caso 
// contrário seu programa apresentará a mensagem: 
// “Presentation Error”.

const input = require('fs').readFileSync('stdin','utf8');

let valor = parseInt(input);
const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for(let nota of notas) {
let qtdNotas = parseInt(valor / nota);
console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
valor = valor % nota;
}
