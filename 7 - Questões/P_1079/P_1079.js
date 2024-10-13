// Leia 1 valor inteiro N, 
// que representa o número de casos de 
// teste que vem a seguir.Cada caso de teste 
// onsiste de 3 valores reais, cada um 
// deles com uma casa decimal.Apresente a 
// média ponderada para cada um destes conjuntos 
// de 3 valores, sendo que o primeiro valor tem peso 2, 
// o segundo valor tem peso 3 e o terceiro valor tem peso 5.

// Entrada
// O arquivo de entrada contém um valor inteiro N 
// na primeira linha.Cada N linha a seguir contém um 
// caso de teste com três valores com uma casa decimal cada valor.

//     Saída
// Para cada caso de teste, imprima a média ponderada dos 
// 3 valores, conforme exemplo abaixo.


var input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split("\n");


let N = parseInt(valores[0]);

for (let i = 1; i <= N; i++) {

    let notas = valores[i].split(' ').map(item => parseFloat(item));


    let media = (notas[0] * 2 + notas[1] * 3 + notas[2] * 5) / 10;


    console.log(media.toFixed(1));
}
// parei em 20 minutos
