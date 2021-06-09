
//1
function imprimirSoma(){
    soma = null
    for(var i = 1; i <= 100; i++){
        if(i % 2 == 0){
            soma = soma + i
        }
    }

    console.log(soma)

}

imprimirSoma()

//2
function funcaoRepetir(elemento, vezes){
    array = []
    for(var i = 0; i < vezes; i++){
        array.push(elemento)
    }

    return array
}

console.log(funcaoRepetir('amigo', 5))

//3
function funcaoRepetirString(numero){
    resultado = ""

    for(var i = 0; i < numero; i++){
        resultado = resultado + "Campinho Digital "
    }

    return resultado
}

console.log(funcaoRepetirString(3))


//4
numero = [2, 4, 5, 8, 9]

//função comum
function imprimirPrimeiroUltimo(array){

    primeiroElemento = array.shift()
    ultimoElemento = array.pop()

    return [primeiroElemento, ultimoElemento]

}

//console.log(imprimirPrimeiroUltimo(numero))

//função arrow reduzida
var funcaoReduzida = array => [array.shift(), array.pop()]

console.log(funcaoReduzida(numero))


//5
conjuntos = ['Amigo', 2, true, 'Curso', 'Abraço', 7, 9, false, 5]

function funcaoSelecao(array){
    arrayResultado = []
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] == 'number'){
            arrayResultado.push(array[i])
        }
    }

    return arrayResultado
}

console.log(funcaoSelecao(conjuntos))


//6
conjuntoNumeros = [1, 7, 4, 9, 10, 22, 12, 15]

function funcaoImparesPares(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            console.log("Esse número é par", array[i])
        } else{
            console.log("Esse número é impar!", array[i])
        }
    }
}

funcaoImparesPares(conjuntoNumeros)
