// Leia um número inteiro que representa 
// um código de DDD para discagem interurbana.
// Em seguida, informe à qual cidade o DDD pertence, 
// considerando a tabela abaixo:

// Se a entrada for qualquer outro DDD 
// que não esteja presente na tabela acima, 
// o programa deverá informar:
// DDD nao cadastrado

// Entrada
// A entrada consiste de um único valor inteiro.

// Saída
// Imprima o nome da cidade correspondente 
// ao DDD existente na entrada.Imprima DDD 
// nao cadastrado caso não existir DDD 
// correspondente ao número digitado.

var input = require('fs').readFileSync('stdin', 'utf8');

const entrada = Number(input);

function tabelaDDD(entrada) {
    if (entrada == 61) {
        console.log('Brasilia')
    } else if (entrada == 71) {
        console.log('Salvador')
    } else if (entrada == 11) {
        console.log('Sao Paulo')
    } else if (entrada == 21) {
        console.log('Rio de Janeiro')
    } else if (entrada == 32) {
        console.log('Juiz de Fora')
    } else if (entrada == 19) {
        console.log('Campinas')
    } else if (entrada == 27) {
        console.log('Vitoria')
    } else if (entrada == 31) {
        console.log('Belo Horizonte')
    } else {
        console.log('DDD nao cadastrado')
    }

}
tabelaDDD(entrada)

//tepo 8 minutos