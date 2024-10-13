// Com base na tabela abaixo, 
// escreva um programa que leia
//  o código de um item e a quantidade 
//  deste item. A seguir, calcule e
//   mostre o valor da conta a pagar.



// Entrada
// O arquivo de entrada contém dois valores 
// inteiros correspondentes ao código e 
// à quantidade de um item conforme tabela acima.

// Saída
// O arquivo de saída deve conter a mensagem
//  "Total: R$ " seguido pelo valor a ser pago, 
//  com 2 casas após o ponto decimal.

// cod      Especificação       preço
// 1        Cachorro Quente    R$ 4.00
// 2        X-Salada           R$ 4.50
// 3        X-Bacon            R$ 5.00
// 4        Torrada simples    R$ 2.00
// 5        Refrigerante       R$ 1.50

var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split(' ');

const codigo = Number(valores[0])
const qtd = Number(valores[1])

function valorLanche(codigo, qtd) {
    switch (codigo) {
        case 1:
            console.log(`Total: R$ ${(qtd * 4.00).toFixed(2)}`);
            break
        case 2:
            console.log(`Total: R$ ${(qtd * 4.50).toFixed(2)}`);
            break
        case 3:
            console.log(`Total: R$ ${(qtd * 5.00).toFixed(2)}`);
            break
        case 4:
            console.log(`Total: R$ ${(qtd * 2.00).toFixed(2)}`);
            break
        case 5:
            console.log(`Total: R$ ${(qtd * 1.50).toFixed(2)}`);
            break
    }

}

valorLanche(codigo, qtd);

// Tempo: 18 minutos
