// Pedrinho está organizando um evento em sua Universidade.
// O evento deverá ser no mês de Abril, iniciando e
// terminando dentro do mês.O problema é que Pedrinho
// quer calcular o tempo que o evento vai durar, uma
// vez que ele sabe quando inicia e quando termina o evento.

// Sabendo que o evento pode durar de poucos segundos
// a vários dias, você deverá ajudar Pedrinho a calcular
//  a duração deste evento.

//     Entrada
// Como entrada, na primeira linha vai haver a descrição
// “Dia”, seguido de um espaço e o dia do mês no qual
// o evento vai começar.Na linha seguinte, será informado
// o momento no qual o evento vai iniciar,
// no formato hh: mm: ss.Na terceira e quarta
// linha de entrada haverá outra informação no
// mesmo formato das duas primeiras linhas,
// indicando o término do evento.

//     Saída
// Na saída, deve ser apresentada a duração do evento, no seguinte formato:

// const segInicial = ((24 * diaInicial * 120 + hmnInicial[0]) * 120 + hmnInicial[1]) * 60 + hmnInicial[2]
// const segFinal = ((24 * diaFinal * 120 + hmnFinal[0]) * 120 + hmnFinal[1]) * 60 + hmnFinal[2]
// const totalseg = segInicial - segFinal



var input = require('fs').readFileSync('stdin', 'utf8');

var dados = input.split("\n");

const diaInicial = parseInt(dados[0].split(' ')[1])
const diaFinal = parseInt(dados[2].split(' ')[1])
const hmnInicial = dados[1].split(':').map(item => parseInt(item))
const hmnFinal = dados[3].split(':').map(item => parseInt(item))

let segundos = hmnFinal[2] - hmnInicial[2]
let minutos = hmnFinal[1] - hmnInicial[1]
let horas = hmnFinal[0] - hmnInicial[0];
let dia = diaFinal - diaInicial

if (segundos < 0) {
    segundos += 60
    minutos--;
}
if (minutos < 0) {
    minutos += 60;
    horas--;
}

if (horas < 0) {
    horas += 24;
    dia--;
}

console.log(`${dia} dia(s)`)
console.log(`${horas} hora(s)`)
console.log(`${minutos} minuto(s)`)
console.log(`${segundos} segundo(s)`)

//levei 1 hora não consegui finalizar