function calculaMedia (notaAv1, notaAv2){

    return (notaAv1 + notaAv2) / 2;
}

function principal (){

const prompt = require ('prompt-sync')();

const media = 7;

const nomeAluno = prompt ('Digite o nome do aluno:')

const entradaNotaAv1 = prompt('Digite a nota da Av1 (0 a 10): ');
const entradaNotaAv2 = prompt('Digite a nota da Av2 (0 a 10): ');

const notaAv1 = Number (entradaNotaAv1);
const notaAv2 = Number (entradaNotaAv2);

const nota  = calculaMedia (notaAv1,notaAv2);


console.log (`O aluno ${nomeAluno} ficou com média ${nota}`);

if (nota >= media){

    console.log ('Aprovado');

} else if (nota < 5){

    console.log('Reprovado');

}else{

    console.log ('Recuperação');
}

}

principal();


