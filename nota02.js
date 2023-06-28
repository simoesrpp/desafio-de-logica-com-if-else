function calculaMedia (notaAv1, notaAv2){

    return (notaAv1 + notaAv2) / 2;

    function textoResultado (mediaDoAluno){

        const media = 7;
        const Nota_Minima_Recuperação = 5;

    }

    if (mediaDoAluno >= media){
        return 'Aprovado';
    } else if (nota < Nota_Minima_Recuperação){
        return 'Reprovado';
    }else{
        return'Recuperação';

function textMediaAluno (nomeAluno, mediaDoAluno) {

    return `O aluno ${nomeAluno} ficou com média ${mediaDoAlunoota}`;
}


}

function principal (){

const prompt = require ('prompt-sync')();


const nomeAluno = prompt ('Digite o nome do aluno:')

const entradaNotaAv1 = prompt('Digite a nota da Av1 (0 a 10): ');
const entradaNotaAv2 = prompt('Digite a nota da Av2 (0 a 10): ');

const notaAv1 = Number (entradaNotaAv1);
const notaAv2 = Number (entradaNotaAv2);

const nota  = calculaMedia (notaAv1,notaAv2);
const textoMedia = textMediaAluno (nomeAluno, nota);
const resultado = textoResultado (nota);


console.log (textoMedia);
console.log (resultado);


}

}

principal();


