var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

for (let i = 0; i < valor.length - 1; i++) {

    if (valor.length[i] !== 0) {

        const [menor, maior] = valor[i].split(' ').map(item => parseInt(item))

        let X = Math.min(menor, maior)

        let Y = Math.max(menor, maior)

        let soma = 0

        for (j = X + 1; j < Y; j++) {

            if (j % 2 !== 0) {
                soma += j
            }

        }
        console.log(parseInt(soma))
    }

}
// tempo 19 minutos