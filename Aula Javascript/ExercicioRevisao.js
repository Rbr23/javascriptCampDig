
console.log("EXERCÍCIO SEMANAL SOBRE VARIÁVEL")

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


console.log("EXERCÍCIO SEMANAL SOBRE STRING")


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

//5
//métodos são os recursos que virão junto com o tipo que eu atribuir àquela variável





console.log("EXERCÍCIO SEMANAL SOBRE NUMBER")

//EXERCÍCIO SEMANAL SOBRE NUMBER

//1
var numero = 4.4
console.log(Number.isInteger(numero))

//2
//a)
var numeroInteiro = 2
var numeroDecimal = 3.56273

//b)
console.log(numeroDecimal.toFixed(2))

//c)
var texto = `O valor ${numeroInteiro} é inteiro porque não tem casas decimais,
porém,
caso tivesse as casas decimais poderia ser chamado de float, 
como o seguinte exemplo ${numeroDecimal}
`

//3
//a)
var valor = numeroDecimal.toPrecision(4)

//b
console.log(valor.toString())

//c
console.log(typeof valor)

//4
numeroDecimal.toPrecision(2)

//5

//a) Boolean é um tipo que só pode atribuir o valor de verdadeiro ou falso a uma variável

//b
var variavelVerd = true
var variavelFals = false






console.log("EXERCÍCIO SEMANAL SOBRE OBJECT")

//EXERCÍCIO SEMANAL SOBRE OBJECT

//1
//a)
var funcionario = {}

//b)
funcionario.nome = "Roberto"
funcionario.sobrenome = "Ribeiro"
funcionario.profissao = "Professor"
funcionario.empregado = true
funcionario.brasileiro = true

//c)
funcionario.amigo = {
    nome:"Marcos",
    sobrenome: "Macedo"
}

//d
console.log(funcionario)


//2
//a)
var conjunto = {
    preco: 25,
    numero: 78,
    idade: 45,
    empregado: true,
    autorizacao: true,
    //c)
    familia : {

    }
}

//3
var objetos = Object.assign(funcionario, conjunto)

//4
var chaves = Object.keys(objetos)

//5
var valores = Object.values(objetos)

//6
//Até o ponto estudado, object ficou entendido como uma coleção de dados de chaves e valores.

//7
var mensagem = null







console.log("EXERCÍCIO SEMANAL SOBRE ARRAY")

//EXERCÍCIO SEMANAL SOBRE ARRAY

//1
var arrayElementos = [[], true, 5, "amigo", false, 9, [4, 5, 6, 1], {nome:"Carlos", conjunto : [4, 3, 2]}]

//2
//a)
console.log(arrayElementos[5] % arrayElementos[6][1])

//b
arrayElementos.splice(3,2, "Maria", "João")

console.log(arrayElementos)

//3
var variavelA = "9"
var variavelB = 5
var variavelC = 9
var variavelD = 10

//a)
console.log(variavelA == variavelB)
//b
console.log(variavelA != variavelC)
//c
console.log(variavelC === variavelA)

//4
console.log(arrayElementos[5] * arrayElementos[7].conjunto[0])







console.log("EXERCÍCIO SEMANAL SOBRE OPERADORES-FUNÇÃO")

//EXERCÍCIO SEMANAL SOBRE OPERADORES-FUNÇÃO


//1
function funcionarioSalario(nome, salario){
    console.log(`${nome} recebe ${salario} reais por mês`)
}

funcionarioSalario("Roberto", 100)


//2
function calcularSalario(nome, diasTrabalhados, diaria){
        var salarioBruto = diasTrabalhados * diaria

        salarioLiquido = salarioBruto - salarioBruto * 0.2

        console.log(`O fucionario ${nome} recebeu ${salarioLiquido} pelos ${diasTrabalhados} dias trabalhados`)

}

calcularSalario("Roberto", 30, 75)

//3
var condicaoVerdadeiro = 4 > 2
var condicaoFalso = 8 > 9

//4
console.log(condicaoFalso || condicaoVerdadeiro)
console.log(condicaoVerdadeiro && condicaoFalso)

//5
console.log(condicaoFalso || !condicaoVerdadeiro)
console.log(condicaoVerdadeiro && !condicaoFalso)