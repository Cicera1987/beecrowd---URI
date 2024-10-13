// Leia a hora inicial, minuto inicial, 
// hora final e minuto final de um jogo. 
// A seguir calcule a duração do jogo.

// Obs: O jogo tem duração mínima de um (1) 
// minuto e duração máxima de 24 horas.

// Entrada
// Quatro números inteiros representando a 
// hora de início e fim do jogo.

// Saída
// Mostre a seguinte mensagem: 
// “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .


var input = require('fs').readFileSync('stdin', 'utf8');

var [hInicial, mIncial, hFinal, mFinal] = input.split(" ").map(item => parseFloat(item));

let hTotal, mTotal;

if (hInicial === hFinal && mIncial === mFinal) {
    hTotal = 24;
    mTotal = 0;
}else{
    hTotal = hFinal - hInicial;
    mTotal = mFinal - mIncial;

    if (mTotal < 0) {
        hTotal -= 1;
        mTotal += 60;
    }

    if(hTotal < 0){
        hTotal += 24;
    }

}
console.log(`O JOGO DUROU ${hTotal} HORA(S) E ${mTotal} MINUTO(S)`)


