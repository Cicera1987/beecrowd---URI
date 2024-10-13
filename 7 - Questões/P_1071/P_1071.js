
var input = require('fs').readFileSync('stdin','utf8');
var [x,y] = input.split("\n").map(item => parseFloat(item))

let soma = 0

if(x < y){
    for(i = x + 1; i < y; i++){
        if (i % 2 != 0) {
            soma += i;
        }

    } 
} else {
    for ( i = y + 1; i < x; i++) {
        if (i % 2 != 0) {
            soma += i;
        }
    }
} console.log(soma)