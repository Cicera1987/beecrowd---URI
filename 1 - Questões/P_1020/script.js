// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Imprima a saída conforme exemplo fornecido.
var input = require('fs').readFileSync('stdin','utf8');

let qtdDias = parseInt(input);
let qtdAnos, qtdMeses;

qtdAnos = parseInt(qtdDias / 365);
qtdDias = qtdDias % 365;

qtdMeses = parseInt(qtdDias / 30);
qtdDias = qtdDias % 30;

let resultado = `${qtdAnos} ano(s)
${qtdMeses} mes(es)
${qtdDias} dia(s)`;

console.log(resultado);

