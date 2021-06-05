
//É importante saber que javascript é fundamentada em funções, então função tem um sentido mais amplo em javacript do que em outras linguagens.

//Função é como se fosse uma receita de bolo, porém utilizada para você reutilizar trechos de códigos e não precisar repetir o mesmo código diversas vezes.

//Uma função só é executada se eu chamá-la

// A ideia principal de uma função é não precisar ficar repetindo código. Tudo que houver repetição, eu posso transformar em função 



//função sem parâmetros
function imprimirResultado(){

    resultadoMeu = 3 + 8
    resultadoMãe = 6 + 9
    console.log('O meu resultado foi de: ', resultadoMeu, ' e o resultado da minha mãe foi de: ', resultadoMãe)

}

imprimirResultado()


//função com parâmetro
/*function imprimirSoma(a, b){

    var resultado = a + b
    console.log('O meu resultado foi de: ', resultado)

}


imprimirSoma(4, 8)

imprimirSoma(7, 6)

imprimirSoma(12, 30)

imprimirSoma(4, 6)*/


function imprimirMultiplicacao(a, b){

    var resultado = a * b
    console.log('O meu resultado foi de: ', resultado)

}


console.log(`-----------------------------------FUNÇÕES COM RETORNO-------------------------------------------`)

//Métodos são funções

//função com retorno são funções que após executarem o trecho de código, retornam um valor que seria o resultado da execução

//utiliza-se a palavra return para fazer o retorno da função


var texto = 'Eu sou professor do campinho digital'

console.log(texto.replace('professor', 'coordenador')) // replace é função
console.log(texto.charAt(4))

//função com retorno
function imprimirSoma(a, b){
    var soma = a + b
    return soma
}


//console.log('O resultado da soma é: ', imprimirSoma(5, 20))

var resultadoSoma = imprimirSoma(10, 9)

console.log('O resultado do retorno da função é: ', resultadoSoma)


function imprimirSalario(nome, salario){
     return trabalhador = `O trabalhador ${nome} recebe R$${salario} de salário por mês`
}

console.log(imprimirSalario('Roberto', 100))
console.log(imprimirSalario('Rogério', 1000))
console.log(imprimirSalario('Arthur', 100000))


console.log('-----------------------------------FUNÇÕES ANÔNIMAS------------------------------------------')

//função anônima é uma função sem nome que pode receber uma variável por parâmetro ou pode receber outra função por parâmetro


//função com retorno => armazena o valor retornado na variável
 function soma(a, b){
     console.log('função de soma: ', a + b)
 }

 //var result = soma(2, 4)



 var imprimirSomaB = function(a, b, soma){
         soma(a, b)
 }

imprimirSomaB(2, 10, soma)


 //função anônima
 //a variável que recebeu a função anônima, agora, passa a ter o mesmo emprego da função

function multiplicacao(a, b){
    return a * b
}


 var imprimirMultiplicacaoB = function(a, b, multiplicacao){
        console.log('O resultado dessa multiplicação dentro da função anônima é: ', multiplicacao(a, b))
 }

 imprimirMultiplicacaoB(3, 10, multiplicacao)


 console.log('-----------------------------------FUNÇÃO ARROW------------------------------------------')

//toda função arrow é uma função anônima
//A ideia principal da função arrow é reduzir uma função de tamanho, deixa-a sintaticamente mais curta
// função arrow reduzida tem um return implícito


//função anônima
var funcaoTriplo = function(numero){
       return numero * 3
}

console.log("funcao anônima: ", funcaoTriplo(3))



//função comum
function funcaoTriplo2(numero){
        return numero * 3
}

console.log("funcao comum", funcaoTriplo2(3))


// função arrow
var funcaoTriplo3 = (numero) => {
        return numero * 3
}

console.log(`Função arrow: ${funcaoTriplo3(3)}`)


//função arrow reduzida
var funcaoTriplo4 = numero => numero * 3

console.log(`Função arrow reduzida: ${funcaoTriplo4(3)}`)