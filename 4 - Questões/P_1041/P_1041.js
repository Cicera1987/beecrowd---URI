// Leia 2 valores com uma casa decimal (x e y), 
// que devem representar as coordenadas de um ponto em um plano. 
// A seguir, determine qual o quadrante ao qual pertence o ponto, 
// ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

// Se o ponto estiver na origem, escreva a mensagem “Origem”.

// Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou 
// “Eixo Y”, conforme for a situação.

// Entrada
// A entrada contem as coordenadas de um ponto.

// Saída
// A saída deve apresentar o quadrante em que o ponto se encontra.

var input = require('fs').readFileSync('stdin', 'utf8');

var valor = input.split(" ");

let x = parseFloat(valor.shift()); 
let y = parseFloat(valor.shift());

function PontoOrigen(x,y) {
    if (x === 0.0 && y === 0.0) {
        console.log("Origem");
    } else if (x === 0.0) {
        console.log("EIXO Y");
    } else if (y == 0.0) {
        console.log("EIXO X");
    } else if (x > 0.0 && y > 0.0) {
        console.log("Q1");
    } else if (x < 0.0 && y > 0.0) {
        console.log("Q2");
    } else if (x < 0.0 && y < 0.0) {
        console.log("Q3");
    } else if (x > 0.0 && y < 0.0) {
        console.log("Q4");
    }
}
PontoOrigen(x, y);

//tempo 26 minutos 
// tratando erros de sintaxe