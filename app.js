const prompt = require('prompt-sync')();

const idade = prompt('Informe sua idade:');


function verificaIdade(idade) {

   
if(idade<0.1){

    console.log ('Idade inválida');
    return;
}

if (idade<18){

    console.log ('Você é menor de idade');
    return;

}

if (idade>17){

    console.log('Você é maior de idade')
    
} 

}

verificaIdade (idade)


