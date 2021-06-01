



//1
function mesContador(contador){
    var array = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    resultado = contador - 1

    console.log(array[resultado])

}

mesContador(9)


function mediaAluno(notaA, notaB){
    var media = (notaA + notaB) / 2
    if(media >= 7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}

mediaAluno(8, 3)


function multiplicacao(a, b){
    return a * b

}

var numero = multiplicacao(2, 6)

console.log(numero)


function numeroParImpar(numero){
    if(numero % 2 == 0){
        console.log('O número é par!')
    } else{
        console.log('O número é impar!')
    }
}

numeroParImpar(10)


function idadeVoto(idade){
    if(idade >= 18 && idade <= 70){
        console.log('O voto é obrigatório!')
    } else{
        console.log('O voto é opcional!')
    }
}

idadeVoto(71)