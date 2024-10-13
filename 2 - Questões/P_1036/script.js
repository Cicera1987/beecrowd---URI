// Leia 3 valores de ponto flutuante e efetue o cálculo 
// das raízes da equação de Bhaskara. 
// Se não for possível calcular as raízes, 
// mostre a mensagem correspondente “Impossivel 
calcular”, 
// caso haja uma divisão por 0 ou raiz de numero negativo.

// Entrada
// Leia três valores de ponto flutuante (double) A, B e C.

// Saída
// Se não houver possibilidade de calcular as raízes, 
// apresente a mensagem "Impossivel calcular". Caso contrário, 
// imprima o resultado das raízes com 5 dígitos após o ponto, com uma 
// mensagem correspondente conforme exemplo abaixo. Imprima 
// sempre o final de linha após cada mensagem.

var input = require('fs').readFileSync('stdin','utf8');

var valores = input.split("\n");

var valores = valores.shift().split(' ');

var A = parseFloat(valores[0]);

var B = parseFloat(valores[1]);

var C = parseFloat(valores[2]);

var delta =  Math.pow(B,2) - (4 * A * C);

if(delta < 0 || A === 0){
    console.log("Impossivel calcular");
}else{
    var deltaR = Math.sqrt(delta);
    var  x1 = ((-B +  deltaR)  / (2 * A));
    var  x2 = ((-B -  deltaR)  / (2 * A));
    console.log("R1 = "+ x1.toFixed(5));
    console.log("R2 = "+ x2.toFixed(5));
}