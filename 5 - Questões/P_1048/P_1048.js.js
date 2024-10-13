
// A empresa ABC resolveu conceder um aumento de 
// salários a seus funcionários de acordo com a tabela abaixo:

// Salário	Percentual de Reajuste
// 0 - 400.00             15%
// 400.01 - 800.00        12%
// 800.01 - 1200.00       10%
// 1200.01 - 2000.00      7%
// Acima de 2000.00       4%


// Leia o salário do funcionário e calcule e mostre o novo salário, 
// bem como o valor de reajuste ganho e o índice reajustado, em percentual.

// Entrada
// A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

// Saída
// Imprima 3 linhas na saída: o novo salário, o 
// valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.
var input = require('fs').readFileSync('stdin', 'utf8');

const salario = parseFloat(input);

function ReajSal(salario) {
    if (salario <= 400.00) {
        perc = 15
        reajust = salario * perc / 100;
        novoSal = reajust + salario;
    }
    else if (salario >= 400.01 && salario <= 800.00) {
        perc = 12;
        reajust = salario * perc / 100;
        novoSal = reajust + salario;
    } else if (salario >= 800.01 && salario <= 1200.00) {
        perc = 10;
        reajust = salario * perc / 100;
        novoSal = reajust + salario;
    } else if (salario >= 1200.01 && salario <= 2000.00) {
        perc = 7;
        reajust = salario * perc / 100;
        novoSal = reajust + salario;
    } else {
        perc = 4;
        reajust = salario * perc / 100;
        novoSal = reajust + salario;
    }
    console.log(`Novo salario: ${novoSal.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajust.toFixed(2)}`);
    console.log(`Em percentual: ${perc} %`);
}
ReajSal(salario);

//tempo 25 minutos