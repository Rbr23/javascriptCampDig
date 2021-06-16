
//1

function somaImpar(){
    soma = null
    for(var i = 30; i <= 100; i++){
        if(i % 2 != 0){
            soma += i //soma = soma + i
        }
    }

    console.log(soma)

}

somaImpar()

//2
function reajusteSalarial(salario){
    var taxa = null
    if(salario <= 280){
        taxa = 0.25
    } else if(salario > 280 && salario <=700){
        taxa = 0.20
    }else if(salario > 700 && salario <=1500){
        taxa = 0.15
    }else if(salario > 1500){
        taxa = 0.10
    }

    salarioNovo = salario + (salario * taxa)

    return `Percentual de aumento aplicado: ${taxa.toFixed(2)}%
            Salário antes do aumento: ${salario}
            Valor de aumento: ${salario*taxa}
            Novo salário após o aumento: ${salarioNovo}
    `

}

console.log(reajusteSalarial(1600))

//3

array = [5, 1, 9, 2, 6, 3, 8, 4, 7, 5, 3, 8, 1, 2, 8, 9, 4, 3, 2, 1,4 ,3 ,7,9]

function somaArray(array){
    soma = null
    for(var i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma
}

console.log(somaArray(array))


//4

function valorMaior(array){
    var valorMaximo = array[0]
    for(var i = 0; i < array.length; i++){
        if(array[i] > valorMaximo){
            valorMaximo = array[i]
        }
    }

    return valorMaximo
}

console.log(valorMaior(array))

//5

var numeros = [1, 2, 3, 4, 0, 6, 7, 8, 9]

function inverterArray(array){
    var resultado = []
    for(var i = array.length - 1; i >= 0; i--){
        resultado.push(array[i])
    }

    return resultado
    
}


console.log(inverterArray(numeros))