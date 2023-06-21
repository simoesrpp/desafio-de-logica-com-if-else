const prompt = require('prompt-sync')();

const operacao = prompt('Informe a operação desejada (+,-): ');

const num1 = Number(prompt('Informe o primerio número: '));

const num2 = Number (prompt('Informe o segundo número: '));



if (operacao === '+'){

    const resultado = num1 + num2;

    console.log ('O resultado da some é :' + resultado )

}


if (operacao === '-'){

    const resultado = num1 - num2;

    console.log(`o resultado da subtracao e: ${resultado}`)
    
}

