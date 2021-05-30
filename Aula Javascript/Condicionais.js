
//Condicionais são utilizadas em programação para tomar decisões com base em alguma variável lógica ou situações de resultado lógico

// A palavra reservada if é utilizada para criar condicionais

//Precisamos de um bloco {}, onde estará armazenado o trecho de código que vamos executar, caso a condição seja verdadeira

//Precisamos de um valor true ou false para a condicional ser executada

//O else é utilizado para dizer que em qualquer outra situação que não seja a condiçao de cima sendo verdadeira, execute aquele outro trecho de código

/*

if(condicao){
    codigo para executar caso a condição seja verdadeira
} else{
    codigo a ser executado em qualquer outra situação
}

*/

var condicao = false

if(condicao){
    console.log('Meu nome é Roberto')
}


if(10 < 15){
    console.log('Meu nome é Roberto')
}

if(10 < 15){
    console.log('Executando essa condicional')
}

var condicaoA = 2 > 1 //verdadeiro

var condicaoB = 6 < 4 //falso

if(condicaoA && !condicaoB){
    console.log('Executando outra condicional')
}


var numero = 4

if(numero == 5){
    console.log('Executando condicional, caso o valor for de 5')
} else{
    console.log('Executando esse trecho de código porque o valor da condicional não deu verdadeira')
}

console.log('---------------------------------------AULA DE QUINTA----------------------------------------------')

//if => verifica a condição que está entre parênteses
//else if => verifica a condição que está entre parênteses, após passar por alguma condicional acima
//else => se nenhuma das condições acima foram satisfeitas, então executa o trecho de código do else


function numeroFuncao(x){
    if(x < 10){ 
        console.log('O x foi menor do que 10') // se o resultado for verdadeiro, ele executa
    } else if (x == 11){
        console.log('X é igual a 11')
    } else if (x == 12){
        console.log('X é igual a 12')
    } else if(x == 13){
        console.log('X é igual a 13')
    } else{
        console.log('O x não satifez nenhuma das condicionais acima')
    }
}

//numeroFuncao(15)


function notaAluno(notaA, notaB){
    media = (notaA + notaB)/2
    
    if(media == 10){
        console.log('Aprovado com distinção', media)
    } else if(media >= 7 && media < 10){
        console.log('Aprovado', media)
    } else{
        console.log('Reprovado!', media)
    }

}

notaAluno(2, 10)