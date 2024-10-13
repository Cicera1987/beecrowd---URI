// Leia 1 valor inteiro N(2 < N < 1000).A seguir, mostre a tabuada de N:
// 1 x N = N      2 x N = 2N        ...       10 x N = 10N

// Entrada
// A entrada contém um valor inteiro N(2 < N < 1000).

//     Saída
// Imprima a tabuada de N, conforme o exemplo fornecido.
var input = require('fs').readFileSync('stdin','utf8');

let n = Number(input);

for(i = 1; i<= 10 ; i++){
    console.log(`${i} x ${n} = ${n * i}`)
}

//tempo 1.54 minutos