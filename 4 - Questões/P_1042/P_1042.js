
// Leia 3 valores inteiros e ordene-os em ordem crescente. 
// No final, mostre os valores em ordem crescente, 
// uma linha em branco e em seguida, os valores na sequência 
// como foram lidos.

// Entrada
// A entrada contem três números inteiros.

// Saída
// Imprima a saída conforme foi especificado.

var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split(" ").map((valor) => parseInt(valor))
const valorOrdenados = [...valores]

valorOrdenados.sort((a,b) => a -b);

for(const valor of valorOrdenados){
    console.log(valor)
}
console.log("")

for(const valor of valores){
    console.log(valor)
}
