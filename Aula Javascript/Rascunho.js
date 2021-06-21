

//1
function retornoString(numero){
    resultado = ""
    for(var i = 1; i <= numero; i++){
          resultado = resultado + " + "
    }

    return resultado

}


console.log(retornoString(100))


//2
var array2 = [2, 6, "amigo", true]

function numeroArray(array){
    arrayResultado = []
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] == 'boolean'){
            arrayResultado.push(array2[i])
        }
    }

    return arrayResultado
}

console.log(numeroArray(array2))


//3
//EXERCÍCIO 4 DO DIA 15
function valorMaximo(array){
    max = array[0]
    for(var i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }

    return max
}

//FUNÇÃO ARROW
console.log(valorMaximo([3, 1, 7, 8, 9]))

var imprimirValor = (array) => {
    max = array[0]
    for(var i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }

    return max
}


//4
function tabuada(){
    for(var i = 1; i <= 10; i++){
        
        for(var y = 1; y <= 10; y++){
            console.log(`${i} x ${y} = ${i * y}`)
        }

        console.log("------------------")

    }
}

tabuada()

arrayMedia = [3, 4, 5]

//5
function mediaArray(array){

    //soma = 12
    soma = null
    for(var i = 0; i < array.length; i++){
        soma += array[i]
    }

    //   media = 12 / 3
         media = soma / array.length

     console.log("A média é de ", media)
}

mediaArray(arrayMedia)


function reajusteSalarial(salario){
    reajuste = null
    switch(salario){
        case 1:
            reajuste = 0.25
            console.log("AAAAAAAAAA")
            break
        case salario > 280 && salario <= 700:
            reajuste = 0.20
            break
        case salario > 700 && salario <= 1500:
            reajuste = 0.15
            break
        case salario > 1500:
            reajuste = 0.10
            break            
    }

    salarioNovo = salario + salario * reajuste
    return `Percentual aplicado: ${reajuste}
            Salário antes do aumento: ${salario}
            Salário antes do aumento: ${salario * reajuste}
            Novo salário após o aumento ${salarioNovo}`

}

console.log(reajusteSalarial(1))




