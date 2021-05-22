

var array = [2, 7, 5, 9, 8]

array.forEach(function(elemento, indice){
    if(Number(elemento) % 2 == 0){
        console.log(`O elemento ${elemento} é PAR e está no índice ${indice}`)
    } else{
        console.log(`O elemento ${elemento} é IMPAR e está no índice ${indice}`)
    }
})


a = 2
b = 2


console.log(Number('3') === 3)


var elementos = [{ amigo: 2, amiga: [2, 4]}, 5]

var valeu = elementos[0].amiga[0]

console.log(valeu / elementos[1])
