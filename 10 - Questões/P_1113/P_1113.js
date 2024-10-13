var input = require('fs').readFileSync('stdin', 'utf8');
var linhas = input.split("\n");


linhas = linhas.slice(0, -1);

for (var i = 0; i < linhas.length; i++) {
    var valores = linhas[i].trim().split(' ').map(Number);
    console.log('valores: ', valores);

    if (valores[0] === valores[1]) {
        break;
    }
    if (valores[0] < valores[1]) {
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}



