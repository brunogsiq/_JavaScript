// /*Exercício 01
//     1 - Percorrer lista de times: Corinthians, Barcelona, Manchester City, Inter de Milão
//     2 - Número de execução iniciando em 1
//     3 - Nome excutado
//     4 - Separador com underline
//     5 = usar forEach
// */

// const timesDeFutebol = ["Corinthians", "Barcelona", "Manchester City", "Inter de Milão"]

// console.log("Exercício 01");

// timesDeFutebol.forEach((timesDeFutebol, indice) => 
// {
//     console.log("Execução com Arrays n°", + indice+1 + " = " + timesDeFutebol);
//     console.log("------------------------------------");
// })

// /*Exercício 02
//     1 - Percorrer lista de times: Corinthians, Barcelona, Manchester City, Inter de Milão
//     2 - Número de execução iniciando em 1
//     3 - Nome excutado
//     4 - Separador com underline
//     5 = Usar for
// */
// console.log("Exercício 02");

// for (indice = 0; indice < timesDeFutebol.length; indice ++)
// {
//     console.log("Execução com For n°", indice+1 + " = " + timesDeFutebol[indice]);
//     console.log("------------------------------------");
// }

/*Exercicio 03
    1 - Percorra a lista
    2 - SP, RJ, SC, BA
    3 - Verificar se confere com SP
    4 - Avisa se sim, ou se não
    5 - Numnero da exercução
    6 - Separador
*/

console.log("Exercício 03");

const estados = ["SC", "BA", "RJ", "SP"]

estados.forEach((estados, indice) =>
{
    console.log("Execução nº", indice+1)
    if( estados == "SP")
    {
        console.log("Na execução n°", indice+1 + ", Estado é: " + estados + ", está correto, é SP");
    } else {
        console.log("Na execução n°", indice+1 + ", Estado é: " + estados + ", está incorreto, Não é SP");
    }
})