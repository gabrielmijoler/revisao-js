// quando um modulo exporta apeans um item, pode-se utilizar
// export default

// so pode existir um export default por arquivo modulo

export default function(vet){
    // criar um novo veotr cujos elementos equivalem ao dobro dos elementos do vetor original
    let res=[]
    for(let n of vet)res.push(n*2)
    return res
}
