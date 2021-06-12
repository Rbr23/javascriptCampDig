

//EXERCÍCIO SEMANAL SOBRE VARIÁVEIS

//1
var nome = 'Roberto'
var profissao = 'Professor'
var empresa = 'Campinho Digital'

var idade = 29
var salario = 100
var altura = 1.83

console.log(nome)
console.log(profissao)
console.log(empresa)
console.log(idade)
console.log(salario)
console.log(altura)



//2
console.log(" O " + profissao + " " + nome + " tem " + idade + " anos e " + altura + " de altura. No momento, ele trabalha no " + empresa + " e recebe: " + salario + " reais")

//3
var salarioProfessor = 100
var salarioCoordenador = 150

var valoresSalariais = salarioCoordenador + salarioProfessor

console.log("O resultado da soma entre os números "+salarioProfessor + " e " + salarioCoordenador + " é de " + valoresSalariais)

//4
/*

Variável é um espaço criado na memória (caixinha) do computador que conseguimos manipular através de um identificador (nome)

*/

//5
/*

Tipagem dinâmica é a capacidade que a linguagem tem de reconhecer o tipo da variável, automaticamente, através do valor atribuído àquela variável criada. A tipagem dinâmica permite que criemos a variável sem precisar de especificar o seu tipo, pois este é identificado através do valor que atribuímos à variável 

*/





//EXERCÍCIO SEMANAL SOBRE STRING

//1

/**
 A) Para ser uma string é necessário ser um texto, não importa o tamanho.


 B) Para ser STRING é necessário estar entre aspas simples ou aspas duplas
 */


 //2

 var familia = "pai"
 var curso = "programação"

 var texto = `Ontem, meu ${familia} me ajudou no exercício de ${curso} do curso que eu faço on line`


 //3

 //a
 console.log(texto.indexOf('x'))
 //b
 console.log(texto.charAt(12))
 //c
 console.log(texto.toUpperCase())
 //d
 console.log(texto.substring(8, 16))

 //4
 var variavelString = `${texto.indexOf('x')}, ${texto.charAt(12)}, ${texto.substring(8, 16)} `

 console.log(variavelString)