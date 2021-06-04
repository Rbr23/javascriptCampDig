
//Exercício 1
function maiorNumero(numeroA, numeroB){
    maior = null
    menor = null    
    if(numeroA > numeroB){
        maior = numeroA
        menor = numeroB
        } else{
            menor = numeroA
            maior = numeroB
        }
    return `O maior número é o ${maior} e o menor é o ${menor}`   

}

console.log(maiorNumero(9, 8))


//Exercício 2
function mesContador(contador){
    var array = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    resultado = contador - 1

    console.log(array[resultado])

}

mesContador(9)


//Exercício 3
function salario(diasTrabalhados, valorRecebido){
        return diasTrabalhados * valorRecebido
}

imprimirSalario = function(nome, valor, dias, operacao){
    console.log(`O funcionário ${nome} recebe ${operacao(dias, valor)}`)
}

imprimirSalario('Roberto', 30, 15, salario)


//Exercício 4
function compararNumeros(numero1, Numero2){
        if(typeof numero1 == typeof Numero2){
            console.log('Números são do mesmo tipo')
        } else{
            console.log('Número não são do mesmo tipo')
        }
}

compararNumeros(2, "6")