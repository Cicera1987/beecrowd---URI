// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

// Saída
// Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

// Obs: Utilize ponto (.) para separar a parte decimal.


var input = require('fs').readFileSync('stdin','utf8');

var [a]= input.split();
var valor = parseFloat(a);
let cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let aux = 0;

console.log("NOTAS:");
for (let i = 0; i < 6; i++) {
    aux = parseInt(valor / cedula[i])
    valor = valor % cedula[i]
    console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`)
}
console.log("MOEDAS:");
for (let j = 6; j < cedula.length; j++) {
    aux = parseInt(valor / cedula[j])
    valor = valor % cedula[j] + 0.00001
    console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`)
}