// Leia um valor inteiro, que é o tempo de duração em segundos de 
// um determinado evento em uma fábrica, 
// e informe-o expresso no formato horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um valor inteiro N.

// Saída
// Imprima o tempo lido no arquivo de entrada 
// (segundos), convertido para horas:minutos:segundos, 
// conforme exemplo fornecido.

var input = require('fs').readFileSync('stdin','utf8');

let qtdSegundos = parseInt(input);
const valores = [3600,60,1];
const resultado = [];

for(let valor of valores) {
    resultado.push(parseInt(qtdSegundos / valor) );
    qtdSegundos = qtdSegundos % valor;
}

console.log(resultado.join(":"));

