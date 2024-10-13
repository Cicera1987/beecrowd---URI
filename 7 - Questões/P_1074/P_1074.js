// PROBLEMA 1074

var input = require('fs').readFileSync('stdin', 'utf8');

var num = input.split("\n").map(item => parseInt(item))

for (i = 1; i < num.length; i++) {
    if (num[i] === 0) {
        console.log(`NULL`)
    } else if (num[i] > 0 && num[i] % 2 === 0) {
        console.log(`EVEN POSITIVE`)
    } else if (num[i] < 0 && num[i] % 2 === 0) {
        console.log(`EVEN NEGATIVE`)
    } else if (num[i] > 0 && num[i] % 2 !== 0) {
        console.log(`ODD POSITIVE`)
    } else if (num[i] < 0 && num[i] % 2 !== 0) {
        console.log(`ODD NEGATIVE`)
    }

}


// tempo 22 minutos... Mesmoo assim tem erro na lógica de 5%, não sei o que é
