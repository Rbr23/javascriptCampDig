
//exercício 1
function maiorMenorNumero(numero1, numero2){
    maior = null
    menor = null
    if(numero1 > numero2){
        maior = numero1
        menor = numero2
    } else{
        maior = numero2
        menor = numero1
    }

    console.log(`O maior número é o ${maior} e o menor número é o ${menor}`)

}

maiorMenorNumero(3, 5)


//exercício 2

function diaSemana(contador){

    array = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    contador = contador - 1

    console.log(array[contador])

}

diaSemana(1)



//Exercício 3

function salario(diasTrabalhados, valor){
    return diasTrabalhados * valor
}

imprimirSalario = function(nome, dias, valor, operacao){
    console.log(`O funcionário ${nome} recebe ${operacao(dias, valor)}`)
}

imprimirSalario('Roberto', 30, 80, salario)



//Exercicio 4

function compararNumero(numero1, numero2){
        if(typeof numero1 == typeof numero2){
            console.log("Variáveis são do mesmo tipo")
        } else{
            console.log("Variáveis não são do mesmo tipo")
        }
}

compararNumero("aa", "bb")