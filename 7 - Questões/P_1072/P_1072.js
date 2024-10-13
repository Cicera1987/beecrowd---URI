
var input = require('fs').readFileSync('stdin', 'utf8');

var num = input.split("\n").map(item => parseInt(item));

let inInterval = 0;
let outInterval = 0;

for (let i = 1; i <= num[0]; i++) {
    if (num[i] >= 10 && num[i] <= 20) {
        inInterval += 1;
    } else {
        outInterval += 1;
    }
}

console.log(`${inInterval} in`);
console.log(`${outInterval} out`);






