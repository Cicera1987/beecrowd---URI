var input = require('fs').readFileSync('stdin', 'utf8');

var cobaias = input.trim().split('\n');

let totalCobaias = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let i = 0; i < cobaias.length; i++) {
    let [qnt, tipo] = cobaias[i].split(' ').map((item) => item.trim());

    if (['C', 'R', 'S'].includes(tipo)) {
        qnt = parseInt(qnt);
        totalCobaias += qnt;

        if (tipo === 'C') {
            coelhos += qnt;
        } else if (tipo === 'R') {
            ratos += qnt;
        } else if (tipo === 'S') {
            sapos += qnt;
        }
    }
}

let percentCoelhos = (coelhos / totalCobaias * 100).toFixed(2);
let percentRatos = (ratos / totalCobaias * 100).toFixed(2);
let percentSapos = (sapos / totalCobaias * 100).toFixed(2);

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${percentCoelhos} %`);
console.log(`Percentual de ratos: ${percentRatos} %`);
console.log(`Percentual de sapos: ${percentSapos} %`);