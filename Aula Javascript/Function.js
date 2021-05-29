
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


