var input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(line => line.trim());

let notas = [];
let i = 0;

while (notas.length < 2 && i < lines.length) {
    let grade = parseFloat(lines[i].replace('\r', '').trim());
    if (grade >= 0 && grade <= 10) {
        notas.push(grade);
    } else if (!isNaN(grade)) {
        console.log('nota invalida');
    }

    i++;
}

if (notas.length === 2) {
    let result = (notas[0] + notas[1]) / 2;
    console.log(`media = ${result.toFixed(2)}`);
}
