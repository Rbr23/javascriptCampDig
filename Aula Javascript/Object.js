
//Objeto é uma coleção de chave-valor (elementos).
//a atribuição da chave é o que caracteriza um objeto {}
// um objeto pode estar dentro de outro objeto, como se fosse um elemento
//notação ponto serve para quando queremos acessar especificamente um elemento dentro do objeto

/*
 
EX: conjunto.profissao

*/

//Ao printarmos a variável que recebe o objeto, ela nos retorna tanto a chave (identificador), quanto o valor da chave.


var conjunto = {
    nome: 'Roberto',
    endereco: 'Leme',
    salario: 200,
    profissao: 'data scientist',
    empregado: true,
    filhos: {
             filho1 : 'Aline',
             filho2 : 'Maria',
             filho3 : 'Dulce',
             filho4 : 'Arthur'
    },
    pais: 'Maria'
}

//console.log(conjunto.nome)
//console.log(conjunto.endereco)
//console.log(conjunto.salario)
//console.log(conjunto.profissao)
//console.log(conjunto.filhos)
//console.log(conjunto.empregado)

//console.log(conjunto)

var campinhoDigital = {

    professor: 'Luciana',
    alunos: {
        aluno1: 'Arthur',
        aluno2: 'Carol',
        aluno3: 'Alan',
        computadores: {
            computador1: 'notebook',
            preco: 2000
        }
    }

}


var colecao = {}

colecao.carro = 'Fox'
colecao.bike = 'Caloi'
colecao.moto = 'Honda'

colecao.professores = {
    professor1: 'Roberto',
    professor2: 'Luciana'
}

//delete colecao.moto //comando responsável por deletar um elemento específico do object

//console.log(colecao)

var chaves = Object.keys(conjunto) // método responsável por retornar apenas as chaves da variavel object

var valores = Object.values(colecao) // método responsável por retornar apenas os valores da variavel object

//console.log(valores)





var alunos = {
    nome1: 'Roberto',
    nome2: 'Maria',
    nome3: 'Joao',
    salario1: 245,
    salario2: 897,

}

var professores = {
    professor1: 'Luis',
    professor2: 'Ligia',
    recebeuSalario: true
}

var turma = Object.assign(alunos, professores) // concatena variáveis do tipo object

console.log(Object.values(turma))

