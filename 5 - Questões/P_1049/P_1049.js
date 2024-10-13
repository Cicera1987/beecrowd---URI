
// Neste problema, você deverá ler 3 
// palavras que definem o tipo de animal possível segundo o 
// esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
// Entrada
// A entrada contém 3 palavras, uma em cada linha, 
// necessárias para identificar o animal segundo a figura acima, 
// com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');

function identificarAnimal(tipo, classe, alimentacao) {
    if (tipo === 'vertebrado') {
        if (classe === 'ave') {
            if (alimentacao === 'carnivoro') {
                return 'aguia';
            } else if (alimentacao === 'onivoro') {
                return 'pomba';
            }
        } else if (classe === 'mamifero') {
            if (alimentacao === 'onivoro') {
                return 'homem';
            } else if (alimentacao === 'herbivoro') {
                return 'vaca';
            }
        }
    } else if (tipo === 'invertebrado') {
        if (classe === 'inseto') {
            if (alimentacao === 'hematofago') {
                return 'pulga';
            } else if (alimentacao === 'herbivoro') {
                return 'lagarta';
            }
        } else if (classe === 'anelideo') {
            if (alimentacao === 'onivoro') {
                return 'minhoca';
            } else if (alimentacao === 'hematofago') {
                return 'sanguessuga';
            }
        }
    }
}

const tipo = lines[0].trim();
const classe = lines[1].trim();
const alimentacao = lines[2].trim();

const animal = identificarAnimal(tipo, classe, alimentacao);
console.log(animal);





