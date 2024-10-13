
// Leia 3 valores de ponto flutuante A, B e C e ordene-os 
// em ordem decrescente, de modo que o lado A representa o 
// maior dos 3 lados. A seguir, determine o tipo de triângulo 
// que estes três lados formam, com base nos seguintes casos, 
// sempre escrevendo uma mensagem adequada:
// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
// Entrada
// A entrada contem três valores de ponto 
// flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

// Saída
// Imprima todas as classificações do triângulo especificado na entrada.

var input = require('fs').readFileSync('stdin', 'utf8');

var [x, y, z] = input.split(" ").map(item => parseFloat(item));

if (x >= y && x >= z) {
    a = x;
    b = y;
    c = z;
}
if (y >= x && y >= z) {
    a = y;
    b = x;
    c = z;
}
if (z >= x && z >= y) {
    a = z;
    b = x;
    c = y;
}

if (a >= (b + c)) {
    console.log(`NAO FORMA TRIANGULO`);
} else if ((a*a) === (b*b + c*c)) {
    console.log(`TRIANGULO RETANGULO`);

} else if ((a*a) > (b*b + c*c)) {
    console.log(`TRIANGULO OBTUSANGULO`);

} else if ((a*a) < (b*b + c*c)) {
    console.log(`TRIANGULO ACUTANGULO`);

}
if (a === b && b === c) {
    console.log(`TRIANGULO EQUILATERO`);

} else if (a === b || b === c) {
console.log( `TRIANGULO ISOSCELES`);

}

//tempo 18