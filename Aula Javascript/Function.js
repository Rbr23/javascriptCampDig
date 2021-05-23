
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


//função com parâmetro
function imprimirSoma(a, b){

    var resultado = a + b
    console.log('O meu resultado foi de: ', resultado)

}


imprimirSoma(4, 8)

imprimirSoma(7, 6)

imprimirSoma(12, 30)

imprimirSoma(4, 6)


function imprimirMultiplicacao(a, b){

    var resultado = a * b
    console.log('O meu resultado foi de: ', resultado)

}

imprimirMultiplicacao(5, 9)




