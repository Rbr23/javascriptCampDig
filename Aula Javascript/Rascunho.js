


function numerosPares(numero){
    contador = 1
    while(contador <= numero){
        if(contador % 2 == 0){
            console.log("Número par:", contador)
        } else{
            console.log("Número impar:", contador)
        }
        contador++
    }
    
}

numerosPares(10)



//Questão do Lucas
var escola = [
    {aluno:'Bia', notas: 4},
    {aluno:'Lucas', notas:2},
    {aluno:'Juliana', notas:3},
    {aluno:'Ricado', notas:10},
    {aluno:'Leticia', notas:9}
 ]
 var contador = 0
 var totalAlunos = escola.length
 var somando = 0
 
 do{
   somando += escola[contador].notas
   notaAlunos++
 }while(contador < totalAlunos)
 
 media = somando / totalAlunos
 console.log(media)




 //Questão do Lucas
 function tabudada(dois,cinco){
    for(var i = dois; i <= cinco ; i++){
       for(var w = dois; w <= cinco; w++){
          console.log(`${i} x ${w} = ${i * w}`)
       }
    }
 }
 
 tabudada(2,5)