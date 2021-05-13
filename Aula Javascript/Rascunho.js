

//Exercicio

//1

//A)
var nomeAluno 

//B)
var nomeFuncionario = null

//C)
//nomeProfessor


//2

var campinhoDigital = {
    professor: 'Roberto',
    computador: 'notebook',
    materia: 'programação',
    diaAula: true,
    aluno:{
        aluno1: 'Alan',
        aluno2: 'Carol',
        faltantes: {

        }
    }

}

console.log(campinhoDigital.diaAula)


//3

var carros = {}

carros.sedan = 'Opala'
carros.hatch = 'Fusca'
carros.comprados = false

console.log(carros.comprados)

//4

console.log(Object.keys(campinhoDigital))

console.log(Object.values(carros))

//5

var todos = Object.assign(campinhoDigital, carros)

console.log(todos)


