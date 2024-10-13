
// Leia a hora inicial e a hora final de um jogo. 
// A seguir calcule a duração do jogo, s
// abendo que o mesmo pode começar em um dia e terminar em outro, 
// tendo uma duração mínima de 1 hora e máxima de 24 horas.

// Entrada
// A entrada contém dois valores inteiros representando 
// a hora de início e a hora de fim do jogo.

// Saída
// Apresente a duração do jogo conforme exemplo abaixo.

var input = require('fs').readFileSync('stdin','utf8');

var [hInicial, hFinal] = input.split(" ").map(item => parseFloat(item));

if(hInicial < hFinal){
    tempo =  hFinal- hInicial;
} else {
   tempo =  (24 - hInicial) + hFinal;
}
console.log(`O JOGO DUROU ${tempo} HORA(S)`);

// tempo durou 8 minutos