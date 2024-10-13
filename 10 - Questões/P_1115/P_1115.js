var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

lines = lines.slice(0, -1);

for (var i = 0; i < lines.length; i++) {
    var values = lines[i].trim().split(' ').map(Number);

    if (values[0] > 0 && values[1] > 0) {
        console.log('primeiro');
    }
    if (values[0] > 0 && values[1] < 0) {
        console.log('quarto');

    }
    if (values[0] < 0 && values[1] < 0) {
        console.log('terceiro');

    }
    if (values[0] < 0 && values[1] > 0) {
        console.log('segundo');

    }
    if (values[0] === 0 && values[1] === 0) {
        break;
    }
}



