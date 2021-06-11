

//1
function inversao(valor){
    var tipo = typeof valor

    if(tipo == "boolean"){
        return !valor
    } else if(tipo == "number"){
        return -valor
    } else{
        return "valor inválido!"
    }
}

var valor = true
console.log(inversao([]))


//2
var array = [2, 5, 1, 9, 10, 8, 3, 5, 2 , 19]
var array2 = [2, 5, 7, 9]

function primeiroUltimo(array){
    return [array[0], array[array.length - 1]]
}

console.log(primeiroUltimo(array))
console.log(primeiroUltimo(array2))

//3
 function saudacao(cumprimento){
    if(cumprimento.toLowerCase() == "manhã"){
        return "Bom dia!"
    } else if(cumprimento.toLowerCase() == "tarde"){
        return "Boa tarde!"
    } else if(cumprimento.toLowerCase() == "noite"){
        return "Boa noite!"
    } else {
        return "Valor inválido!"
    }
 }

 console.log(saudacao("NOITE"))

 //4
 function numeroAoQuadrado(numero){
        //return numero * numero
        return numero **2
 }

 numero = numeroAoQuadrado(9)
 console.log(numero)

 //5
function notas(notaA, notaB){
    var media = (notaA + notaB)/2

    if(media < 5){
        console.log("Reprovado!")
    } else if (media == 5){
        console.log("Recuperação!")
    } else if (media > 5 && media <= 7){
        console.log("Aprovado!")
    } else {
        console.log("Aprovado com louvor!")
    }

}

notas(1, 3)



//EXERCÍCIO DO DIA 10.06
//1
function numeroImpar(){
    for(var i = 1; i <= 150; i++){
        if(i % 2 != 0){
            console.log("Número impar!", i)
        }
    }
}

numeroImpar()

//2




//3
function tabuada(numero){
    if(numero > 1 && numero <= 10){
        for(var i = 1; i <=10; i++){
            console.log(i * numero)
        }
    } else{
        console.log("Número inválido!")
    }
}

tabuada(5)


//4
function numeroAoQuadrado(numero){
    //return numero * numero
    return numero **2
}

numero = numeroAoQuadrado(9)
console.log(numero)


numeroElevado = numero => numero **2

console.log(numeroElevado(6))

//5

//função comum
function notas(notaA, notaB){
    var media = (notaA + notaB)/2

    if(media < 5){
        console.log("Reprovado!")
    } else if (media == 5){
        console.log("Recuperação!")
    } else if (media > 5 && media <= 7){
        console.log("Aprovado!")
    } else {
        console.log("Aprovado com louvor!")
    }

}

//função anônima

function funcaoMedia(notaA, notab){
    return (notaA + notab)/2
}

var imprimirMedia = function(notaA, notaB, funcao){
    var media = funcao(notaA, notaB)
    if(media < 5){
        console.log("Reprovado!")
    } else if (media == 5){
        console.log("Recuperação!")
    } else if (media > 5 && media <= 7){
        console.log("Aprovado!")
    } else {
        console.log("Aprovado com louvor!")
    }
}

imprimirMedia(4, 8, funcaoMedia)




