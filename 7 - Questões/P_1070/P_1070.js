
var input = require('fs').readFileSync('stdin','utf8');

let valor = parseInt(input)
let count = 0

while( count < 6){
    if (valor % 2 !== 0) {
        console.log(valor)
        count ++
    }
    valor++
}

// for(i = 1; i < 12 ; i = i + 2){
//     if(valor % 2!== 0){
//     }
//     console.log(valor + i)
// }

// tempo 19 minutos
// a primeiro forma não deu cero

