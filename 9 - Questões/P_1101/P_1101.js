var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.trim().split('\n');

for (let i = 0; i < valores.length; i++) {
    // Converte a linha atual em um array de números
    let numeros = valores[i].split(' ').map(item => parseInt(item));

    // Verifica se algum dos valores é menor ou igual a zero
    if (numeros[0] <= 0 || numeros[1] <= 0) {
        break; // Encerra o loop se algum valor for menor ou igual a zero
    }

    // Determina o menor e o maior valor
    let M = Math.min(numeros[0], numeros[1]);
    let N = Math.max(numeros[0], numeros[1]);

    // Inicializa a soma
    let soma = 0;

    // Imprime a sequência e calcula a soma
    for (let j = M; j <= N; j++) {
        process.stdout.write(`${j} `);
        soma += j;
    }

    console.log(`Sum=${soma}`);
}
