

//String é uma cadeia de caracteres // tipo de texto 
// String precisa estar entre "" , ''
//Inicialmente, vamos aprender que métodos são os recursos que virão junto com o tipo que eu atribuir àquela variável
//toda string tem letras e cada letra está dentro de uma posição e essa posição inicia do 0 em diante.
//posição da letra é a mesma coisa que índice da letra

//var texto = "vou ao cinema"
//v na posição 0
//o na posição 1
//u na posição 2


var funcionario = "Roberto"
//R na posição 0
//o na posição 1
//b na posição 2
//e na posição 3

var mercado = "Vou ao mercado"
//V na posição 0
//o na posição 1
//u na posição 2


var texto = "vou ao cinema"
//v - 0
//o - 1
//u - 2

console.log(texto.toUpperCase()) // método (recurso) para colocar a string em maiúsculo
console.log(texto.toLowerCase()) //método (recuro) para colocar a string em minúsculo
console.log(texto.charAt(13)) // método (recurso) para retornar a letra que está em determinada posição enviada por parâmetro
console.log(texto.indexOf('e')) //método (recurso) para retornar o índice de determinada letra (ou string) que eu passar por parâmetro
console.log(texto.substring(0, 3)) //método que retorna de um índice a outro. Ele retorna o primeiro parâmetro e uma posição antes do segundo parâmetro
console.log(texto.slice(0, 3))

//exemplo substring / slice(parâmetro inicial , parâmetro - 1)




//CONCATENAÇÃO DE STRINGS

console.log(funcionario , ", " , mercado)
console.log(funcionario + ", " + mercado)
console.log(funcionario.concat(', ').concat(mercado))




var nome = "Arthur"

var nota = 25

console.log("A nota do " + nome + " é " + nota) 
console.log("A nota do " , nome + " é " , nota)
console.log("A nota do ".concat(nome).concat(" é ").concat(nota))
