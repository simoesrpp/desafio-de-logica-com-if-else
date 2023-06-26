const calculadora  = require ('./calculadora4.js');

const prompt = require('prompt-sync')();

console.log('+----------------------------------------------------------+');
console.log('                Bem-Vindo ao Menu Principal!               ');
console.log('+----------------------------------------------------------+\n');



console.log('Escolha uma opção para iniciar um dos programas disponíveis:\n');
console.log('1 - Calculadora');
console.log('0 - Sair...');

const opcao = prompt('\nInforme a opção desejada: ');

switch(opcao){

    case '1':
        calculadora.principal();
        break;

    case '0':
        console.log('Saindo...');
        break;

    default:
        console.log('Opção inválida!')
        
}


//calculadora.principal();
