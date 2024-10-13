var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n")
console.log('lines: ', lines);

for (var i = 0; i < lines.length; i++) {
    var values = lines[i].trim().split(' ').map(Number)
    var numerador = values[0]
    var denominador = values[1]

    if (numerador !== null && denominador !== 0) {
        var result = numerador / denominador
        if (!isNaN(result)) {
            console.log(result.toFixed(1))
        }
    } else {
        console.log("divisao impossivel")
    }
}


