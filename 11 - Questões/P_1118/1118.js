var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let index = 0;

function getValidGrade() {
    while (true) {
        let grade = parseFloat(lines[index]);
        index++;
        if (grade >= 0 && grade <= 10) {
            return grade;
        } else {
            console.log('nota invalida');
        }
    }
}

function calculateAverage() {
    let grade1 = getValidGrade();
    let grade2 = getValidGrade();
    let average = (grade1 + grade2) / 2;
    console.log(`media = ${average.toFixed(2)}`);
}

function askNewCalculation() {
    while (true) {
        console.log('novo calculo (1-sim 2-nao)');
        let response = parseInt(lines[index]);
        index++;
        if (response === 1 || response === 2) {
            return response;
        }
    }
}

while (true) {
    calculateAverage();
    let shouldContinue = askNewCalculation();
    if (shouldContinue === 2) {
        break;
    }
}
