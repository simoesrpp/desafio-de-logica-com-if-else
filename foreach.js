const listaNomesAluno = ["João", "Rodrigo","Caio","Raphaela","Gustavo","Solon" ];


listaNomesAluno.forEach(nomeAluno => {

    console.log (`Aluno: ${nomeAluno}`);

});

console.log('-----------------------------------');

function imprimeAluno(nomeAluno) {

    console.log (`Aluno: ${nomeAluno}`);

}

listaNomesAluno.forEach (imprimeAluno);






