// importando modulos es6
// quando um item é exportando com export, na importacao
// deve-se usar a chaves (desestruturação) 

import{numeros}from './includes/dados.mjs'
import {somavet,quadradavet} from './includes/funct.mjs'

// quando o arquivo exporta algo com *export default, o import nao usa chaves

import dobravet from'./includes/func2.mjs'

console.log(somavet(numero))
console.log(quadradovet(numero))
console.log(drobravet(numero))
