
var input = require('fs').readFileSync('stdin','utf8');

var numPares = input.split("\n").map(item => parseFloat(item))

let contador = 0
for(i = 1; i <= 5; i++){
    if(numPares[i] % 2 === 0){
        contador+= 1
        pares = contador
    }

}console.log(`${pares} valores pares`)

// tempo 4 minutos