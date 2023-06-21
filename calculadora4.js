function soma (num1,num2){

    return num1+num2;
    
}

function subtracao (num1,num2){

    return num1-num2;
    
}

function multiplicacao (num1,num2){

    return num1*num2;
    
}

function divisao (num1,num2){

    
    return num1/num2;
    
}

function impriResultado (num1,num2,resultado,operacao){

return `O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`;

}

function calcula (num1,num2,operacao){

    switch(operacao) {

    case '+': 
        return soma (num1,num2)

    case '-': 
        return subtracao (num1,num2)

    case '*': 
        return multiplicacao (num1,num2)

    case '/': 
        return divisao (num1,num2)
    }
}

    
function principal(){

    const prompt = require('prompt-sync')();

    const operacao = prompt('Informe a operação desejada (+,-,*,/): ');
    
    const num1 = Number(prompt('Informe o primerio número: '));
    
    const num2 = Number (prompt('Informe o segundo número: ')); 

    const resultado = calcula (num1,num2,operacao)

    const saidaDetexto = impriResultado (num1,num2,resultado,operacao);



    console.log (saidaDetexto)
}
    
principal();