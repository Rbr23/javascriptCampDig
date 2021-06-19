

//WHILE -> EXECUTA O BLOCO ENQUANTO A CONDIÇÃO FOR VERDADEIRA

/*
 
while(){

}

*/

//DO... WHILE -> EXECUTA O BLOCO PELO MENOS UMA VEZ E DEPOIS VERIFICA SE A CONDIÇÃO É VERDADEIRA.

/*

do{

} while()

*/



//EXEMPLO FOR

for(var i = 1; i <= 10; i++){
    //console.log(i)
}

//WHILE SIGNIFICA ENQUANTO
//EXEMPLO while

contador = 1

while(contador <= 10){
    console.log(contador)

    contador++
}



arrayCores = ["Amarelo", "Azul", "Verde", "Branco"]

var numero = 0

while(numero < arrayCores.length){
    //console.log(arrayCores[numero])

    numero++
}

/*

var cidade = ""

while(cidade != "Rio de janeiro"){

    print("Qual é a tua cidade?")
    cidade = input()

}

*/



var linguagensProgramacao = ["Js", "Java", "Python"]

index = 0

do{

    console.log(linguagensProgramacao[index])

    index++

} while(index < linguagensProgramacao.length)








var alunos = [

    {aluno:"João", nota:1},
    {aluno:"Maria", nota:10},
    {aluno:"Marcos", nota:5},
    {aluno:"André", nota:7},
    {aluno:"Roberto", nota:3},

]

var incrementador = 0
var totalAlunos = alunos.length
var somaNotas = 0


do{
    somaNotas += alunos[incrementador].nota


    incrementador++
} while(incrementador < totalAlunos)

media = somaNotas / totalAlunos

console.log(media)
