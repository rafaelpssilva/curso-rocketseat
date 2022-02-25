/* Crie 2 arquivos JavaScript
 * O primeiro, ira exportar uma função chamada getFlag()
 * O que receberá um argumento do tipo String.
 * Essa função deverá buscar dentro do array procees.argv deseja, que é a String é retornar o valor da flag.
 * 
 * O segundo irá importar a função e passar a flag desejada.
 * 
 * Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
 * Para que seja impresso no terminal a saudação e o nome  da pessoa.
*/ 

const myModule = require('./desafio-exports')

myModule('--name', '--lastName')


