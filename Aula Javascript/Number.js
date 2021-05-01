
//Number é um tipo numérico que pode ser inteiro ou flutuante (decimal)
//true = verdadeiro
//false = falso
//Number.isInteger() retorna se a variável é inteira ou não, através do true (verdadeiro) ou false (falso)



var numeroInteiro = 8
var numeroFlutuante = 8.7674635539

//console.log(typeof numeroFlutuante)
//console.log(Number.isInteger(numeroFlutuante)) //retorna se a variável é inteira ou não, através do true (verdadeiro) ou false (falso)
//console.log(numeroFlutuante.toString()) //Método que transforma uma variável number em tipo string ljhhjhjgjggjs

var numeroDecimal = 3.487215639

console.log(numeroDecimal.toFixed(0)) //método tofixed(), quando passamos o parâmetro 0, ele arredonda a variável

/* 
    EX: variável > 7.5 => arredonda para cima = 8
    EX: variável < 7.5 => arredonda para baixo = 7

*/

console.log(numeroDecimal.toFixed(4)) //tofixed() retorna a quantidade de casas decimais da variável, de acordo com o número que você passar por parâmetro

console.log(numeroDecimal.toPrecision(1)) //retorna a quantidade total de dígitos que eu quero trazer da variável

var numero = Number('25') //comando que nos permite transformar variáveis do tipo string em tipo number

var numero1 = Number('56')

console.log(typeof numero1)




var peso1 = 0.2
var peso2 = 0.8

var avaliacao1 = 9.67
var avaliacao2 = 5.87

var total = avaliacao1 * peso1 + avaliacao2 * peso2

var media = total / (peso1 + peso2)

console.log(`A média das avaliacões de nota ${avaliacao1} e nota ${avaliacao2} é: ${media}`)

/*

OS PASSOS ABAIXOS SÃO SOBRE A VARIÁVEL MEDIA.

1) verificar o tipo
2) uma vez verificado que é do tipo number, conseguir verificar se é inteiro ou flutuante
3) arredondar o número 
4) traga a variável apenas com 3 casas decimais
5) faça a variavel retornar com apenas os 5 primeiros dígitos
6) transforme a variável em tipo string
7) verifique se a variável realmente está em string

*/