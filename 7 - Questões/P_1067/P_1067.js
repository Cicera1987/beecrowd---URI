
var input = require('fs').readFileSync('stdin','utf8');

var valor = Number(input)

for(i = 1; i <= valor; i = i + 2){
    console.log(i)
}
//tempo 3 minutos sem dificuldades