const prompt = require('prompt-sync')();

const idade = prompt('Informe sua idade:');


function verificaIdade(idade) {

   
if(idade<0.1){

    return'Idade inválida';
}

if (idade<18){

    return 'Você é menor de idade' ;
}

if (idade<61){

    return 'Você é maior de idade' ;
}


return('Você é idoso!')
  


}

const output = verificaIdade(idade);

console.log(output)









