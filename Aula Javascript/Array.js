
//Array é uma forma de agrupar vários valores (ELEMENTOS), através de um único identificador de uma forma linear.
//Array é uma estrutura indexada; conseguimos acessar seus elementos através de um índice. 
//Em javascript, o array é heterogêneo. 
//Array, em javascript, é um objeto.
//Array é atribuído a uma variável através de []
//array é uma estrutura dinâmica, que aumenta e diminui de acordo com a necessidade
//array é um vetor para armazenar dados


var conjunto = {
    aluno: 'Roberto',
    professor: 'Arthur',
    salario: 200
} // coleção organizada através de chaves que eu posso acessar o valor.

console.log(conjunto.professor)

var elementos = ['Roberto', 'Arthur', 200] //coleção indexada, que eu consigo acessar os elementos diretamente pelo índice

console.log(typeof [])



var valores = [4.7, 9, 2.4]

//[0] - 4.7
//[1] - 9
//[2] - 2.4

console.log(valores[1])
console.log(valores[0])
console.log(valores[0],';', valores[2],';', valores[1])

var professores = ['Roberto', 'Susie', 'Paulo'] //atribuição literal


var demitidos = new Array('Bia', 'Carlos', 'Luiz') //instanciando um array


console.log(demitidos[0])
console.log(professores[2])



professores[0] = 'Luciana' //atribuição
professores[4] = 87

console.log(professores)

demitidos[3] = true

console.log(demitidos)


//MÉTODOS IMPORTANTES DE ARRAY

var alunos = ['Arthur', 'Breno', 'Alan', 'Maria', 'João']

//alunos[0] - Arthur
//alunos[1] - Breno
//alunos[2] - Alan
//alunos[3] - Maria
//alunos[4] - João

console.log(alunos.length) //método que retorna o comprimento do array

alunos.push('LUIZ') // método responsável por atribuir um novo valor após o último índice (no final).
console.log(alunos)


alunos.pop() // método que fará a remoção do último elemento do array
console.log(alunos)

alunos.shift() // método que fará a remoção do primeiro elemento do array
console.log(alunos)

alunos.unshift('Carol') // método que fará a atribuição de um novo elemento no primeiro índice
console.log(alunos)


//------------------------------------------------------------------------------------------------

console.log('-------------------------------------------------AULA DE QUINTA-----------------------------------------------')

console.log(alunos)

//1) primeira forma de utilizar o splice: 1 parâmetro

alunos.splice(1) // Quando utilizamos o splice passando apenas 1 parâmetro, ele retira todos os elementos a partir daquele parâmetro, inclusive o próprio índice passado pelo parâmetro
console.log(alunos)

//2) segunda forma de utilizar o splice : 2 parâmetros

alunos.splice(2, 2) // O primeiro parâmetro diz qual é o índice que vai haver a remoção; o segundo parâmetro diz a quantidade de elementos a partir do primeiro parâmetro (índice)
console.log(alunos)

//3) terceira forma de utilizar o splice : o primeiro parâmetro vai indicar a partir de qual índice eu quero fazer a remoção, o segundo parâmetro vai indicar a quantidade de elementos. Os próximos parâmetros vão indicar os elementos que preciso adicionar no lugar dos que foram removidos. 

alunos = ['Arthur', 'Ligia', 'Marta', 'Carol']

alunos.splice(1, 3, 'Adidas', 'Nike')
console.log(alunos)

var novoArray = alunos.slice(1, 3) 
console.log(novoArray)


