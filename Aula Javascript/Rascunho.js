


var variavelVerdadeira = true
var variavelFalso = false


console.log( 'OPERADOR LÓGICO: V and V = V', true && true)
console.log( 'OPERADOR LÓGICO: V and F = F', variavelVerdadeira && variavelFalso)
console.log( 'OPERADOR LÓGICO: F and V = F', variavelFalso && variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: F and F = F', variavelFalso && variavelFalso)

//-------------------------------OR-----------------------------------------------------
console.log('-------------------------------OR-----------------------------------------------------')

console.log( 'OPERADOR LÓGICO: V or V = V', variavelVerdadeira || variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: V or F = V', variavelVerdadeira || variavelFalso)
console.log( 'OPERADOR LÓGICO: F or V = V', variavelFalso || variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: F or F = F', variavelFalso || variavelFalso)


var conjuntos = [[],true,30,'Portugal', false, 500, [10, 40, 50, 60], {estado:'Rio de janeiro', array:[100, 200, 300]}]

console.log(conjuntos[5] % conjuntos[7].array[1])



function mes(numero){
    var mes = ['janeiro', 'fevereiro', 'Março', 'Abril', 'Maio', 'Junho']
    console.log(mes[numero - 1])
}

mes(6)


var soma = function(x, y){
    return x + y
}

imprimirResultado = function(a, b, operacao){
    console.log(operacao(a, b))
}

imprimirResultado(2, 3, soma)