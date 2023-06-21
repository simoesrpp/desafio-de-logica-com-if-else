const prompt = require('prompt-sync')();

const operacao = prompt('Informe a operação desejada (+,-,*): ');

const num1 = Number(prompt('Informe o primerio número: '));

const num2 = Number (prompt('Informe o segundo número: '));

function verificaIdade (resultado){

if (operacao === '+'){

    return `o resultado da subtracao e: ${num1+num2}`;
    
}


if (operacao === '-'){

    return `o resultado da subtracao e: ${num1-num2}`;
    
}

if (operacao === '*'){

    return `o resultado da subtracao e: ${num1*num2}`;
    
}
}

const output = resuladoFinal (resultado)
console.log(output)

