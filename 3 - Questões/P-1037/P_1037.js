// Você deve fazer um programa que leia um valor 
// qualquer e apresente uma mensagem dizendo em qual dos 
// seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) 
// este valor se encontra. Obviamente se o valor não estiver
//  em nenhum destes intervalos, deverá ser impressa a mensagem 
//  “Fora de intervalo”.

// O símbolo ( representa "maior que". Por exemplo:
// [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
// (25,50] indica valores maiores que 25 Ex: 25.00001 até
// o valor 50.0000000

// Entrada
// O arquivo de entrada contém um número com ponto flutuante qualquer.

// Saída
// A saída deve ser uma mensagem conforme exemplo abaixo.

// Exempro de entrada:          Exemplo de saída:
// 25.10                        Intervalo (25,50]
// 25.00                        Intervalo [0,25]
// 100.00                       Intervalo (75,100]
// -25.02                       Fora do intervalo
var input = require('fs').readFileSync('stdin', 'utf8');

const entrada = Number(input);

function intervalo(entrada) {
    if (entrada >= 0 && entrada <= 100) {
        if (entrada <= 25) {
            console.log('Intervalo [0,25]');
        } else if (entrada > 25 && entrada <= 50) {
            console.log('Intervalo (25,50]');
        } else if (entrada > 50 && entrada <= 75) {
            console.log('Intervalo (50,75]');
        } else {
            console.log('Intervalo (75,100]');
        }

    } else {
        console.log('Fora de intervalo');
    }
}
intervalo(entrada);


// Tempo: 27 minutos
//dificuldade em implementar o else 
// atençao no retorno do console.log (escrita)
