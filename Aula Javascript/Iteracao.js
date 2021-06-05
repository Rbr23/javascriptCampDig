


//Operador binário: true && false

//Operador unário: numero++ / numero--

var numero = 10
numero--


/*

FOR

primeira área: inicializa a variável i para dizer o ponto de partida
segunda área: condição para fazer a iteração, looping
terceira área: incrementador. Ele vai incrementar a variável declarada na primeira enquanto a condição da segunda área for verdadeira

*/



//Preciso percorrer cada número de 1 a 10

for(var i = 1; i <= 10; i++){
    //console.log(`Número ${i}`)
}


for(var i = 5; i <= 20; i++){
    //console.log(`Número ${i}`)
}

var array = [8, 4, 2, 9, 1, 15, 22, 23]

//console.log(array.length) retorna o comprimento do array, tamanho do array

for(var i = 0; i < array.length; i++){
    //console.log(`Elemento do array:`, array[i], "índice do array: ", i)
}


function iteracaoArray(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            console.log("O número :", array[i], "é par!")
        } else{
            console.log("O número :", array[i], "é impar!")
        }
    }
}

iteracaoArray(array)
