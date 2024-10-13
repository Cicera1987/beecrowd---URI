var input = require('fs').readFileSync('stdin', 'utf8');

let i = 0
let j = 0

for (i = 1, j = 60; i <= 37, j >= 0; i += 3, j -= 5){
    console.log(`I=${i} J=${j}`)  
}
    


