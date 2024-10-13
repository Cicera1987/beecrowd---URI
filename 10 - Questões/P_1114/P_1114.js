var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n")
var senha = 2002
for (var i = 0; i < lines.length; i++) {

    var value = parseInt(lines[i].trim())

    if (value != senha) {
        console.log('Senha Invalida')

    } else {
        console.log('Acesso Permitido')
        break;
    }

}



