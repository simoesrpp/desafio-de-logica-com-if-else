
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

function principal(){

    const prompt = require('prompt-sync')();

    const idade = prompt('Informe sua idade:');

    const output = verificaIdade(idade);

    console.log(output)
}

module.exports = {

    principal
}








