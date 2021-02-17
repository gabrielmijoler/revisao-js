let potencia2 = (b,e) => b ** e
console.log(potencia(2,5))

// funcao de parametro
function megasena(){
    // esta funcao retorna um numero aleatorio de 1 a 60
    // math.random()-> retorna um numero de aleatoria entre 0(inclusive) e 1(exclusive)
    //*60-> ajusta a faixa de valores para entre 0 59
    // +1 -> ajusta a faixa de valores para entre 1 e 60
    // math.floor()->retira a aprte fracinaria(casas decimais) do resultado
    return Math.floor(math.random()*60+1)
}
// 6 numeros de um jogo da megasena

console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

// em arrow functions sem parametros é necessario deixar um par vazio de parenteses
// para marcar o lugar dos parametros

const megasena2=() =>math.floor(math.random()*60+1)

// 6 numeros de um jogo da megasena
console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

function somatudo(...nums){//... siginifca q nao ha quantidade fixa de parametros
    let soma = 0
    // o parametro do restop, dentro de uma funcao, é interpretado como um vetor
    for (let n of nums) soma +=
    return soma

}
console.log(somatudo(1,2,3,4,5,6,7,8,9))

// Em arrow functions com mias de uma linha no corpo, as chaves retorname
// tambem eh necessario voltar a usar a palabra reurn para retornar um valores

const somatudo2
function somatudo2(...nums){//... siginifca q nao ha quantidade fixa de parametros
    let soma = 0
    // o parametro do restop, dentro de uma funcao, é interpretado como um vetor
    for (let n of nums) soma +=
    return soma

}
console.log(somatudo2(1,2,3,4,5,6,7,8,9))
// conclucao; arrow function sao ideias para quando uma funcao apenas uma 
// ou poucas linhas de codigo no corpo
