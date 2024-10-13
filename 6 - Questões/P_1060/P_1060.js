
var input = require('fs').readFileSync('stdin','utf8');

var num = input.split("\n").map(item => parseFloat(item))
let numPositivo = 0

for(let i = 0; i < num.length; i++){
    if( num[i] > 0 ){
    numPositivo +=1;
    }

}console.log(`${numPositivo} valores positivos`)


// tempo 7 minutos