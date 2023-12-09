//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;


// indice =       0     1   2    3       4
const valores = [18.0, 80, 43, 1.8888, "teste"]

//var (array) -> definido um indice 10 e atribuindo o valor de 967 para o array 
valores [10] = 967 // --> incluindo o indice 10 no array

console.log(`

${valores[10]}
${valores[3]}.toFixed(1) //limita as casas decimais em 2 após a virgula
${valores[10]}
${valores}
${valores.length} ////extensão do nosso array (numeral)

`);

//**************************************   IMPLEMENTAR MÉTODOS DE ARRAY  ********************************************************** */
//MÉTODOS DE ARRAY 1
// 1 psuh -> UTILIZADO PARA ADICIONAR ITENS NO ARRAY (SEMPRE NA ÚLTIMA POSIÇÃO)
   //posições =      0         1       2         3         
const pushArray = ['girafa', 'leão', 'coala','camaleão']

console.log(pushArray);

//adicionando valores
pushArray.push("caramelo do alex auau")
pushArray.unshift("animal01")



// 2- pop -> remove o último item do array
const popArray = ['andre', 'leonardo', 'ana', 'beatriz']


popArray.Array.pop();

popArray.shift()

console.log(popArray);

//3- delete
const deleteArray = ['banana', 'maca', 'pera', 'uva', 'sala mista']

console.log(deleteArray);

delete deleteArray [1]

console.log(deleteArray);

//splice => substituir valores

//                 metodo indice    quantidade de valor    novo valor
deleteArray.splice(      1   ,              1   ,           'melão')

console.log(deleteArray);


// 4- filter -> funções
//                   0   1   2    3   4   
const filterArray = [1, 50, 20, 35, 60 ]

console.log(filterArray);

const arrayFiltrado = FilterArray.filter((findArray)=> {})

//bloco de execução

return findArray > 20

///saída de dados

console.log (arrayFiltrado);

// - map -> modifica o array existente -> criar um novo array modificado -> funções

const mapArray = [10 , 20 , 25 , 30 , 35 ] 

// inicio modificação array

const arraymodificado = mapArray.map( (mapArrayModificado) => {
      
      return mapArrayModificado * 2


})

console.log(mapArray);
console.log(arraymodificado);

// 6- foreach ->

const forArray = ['jubileu', 'eyk', 'jabes', 'ane']


forArray.forEach((listArray) => {

    return console.log(listArray)


})

// 7- sort
//Crie um array cde nomes e em seguida organize eles em ordem alfabética
const sortArray = ['janeiro' , 'fevereiro' , 'marco', 'abril' , 'maio' , 'junho']

console.log(sortArray)

sortArray.sort()

console.log(sortArray);

const arrraySortNumber = [10 , 235 , 542 , 871 , 1050]

arrraySortNumber.sort()

console.log (arrraySortNumber);


// 8- reduce


