// Leia 3 valores reais (A, B e C) 
// e verifique se eles formam ou não um triângulo. 
// Em caso positivo, calcule o perímetro do 
// triângulo e apresente a mensagem:

// Perimetro = XX.X

// Em caso negativo, calcule a área do 
// trapézio que tem A e B como base e C como altura, 
// mostrando a mensagem

// Area = XX.X
// Entrada
// A entrada contém três valores reais.

// Saída
// O resultado deve ser apresentado com uma casa decimal.

var input = require('fs').readFileSync('stdin','utf8');

var [A, B, C]= input.split(" ").map(item => parseFloat(item));

perimetro = A + B + C;
area = ((A + B) * C)/2;

if((A < B + C) && (B < A + C) && (C < B + A)){   
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}else{  
    console.log(`Area = ${area.toFixed(1)}`);
}

//tempo 9 minutos