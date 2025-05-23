// /*Exercício 01
//     1 - Percorrer lista de times: Corinthians, Barcelona, Manchester City, Inter de Milão
//     2 - Número de execução iniciando em 1
//     3 - Nome excutado
//     4 - Separador com underline
//     5 = usar forEach
// */

    const timesDeFutebol = ["Corinthians", "Barcelona", "Manchester City", "Inter de Milão"]

    console.log("Exercício 01");

    timesDeFutebol.forEach((timesDeFutebol, indice) => 
    {
        console.log("Execução com Arrays n°", + indice+1 + " = " + timesDeFutebol);
        console.log("------------------------------------");
    })

// /*Exercício 02
//     1 - Percorrer lista de times: Corinthians, Barcelona, Manchester City, Inter de Milão
//     2 - Número de execução iniciando em 1
//     3 - Nome excutado
//     4 - Separador com underline
//     5 = Usar for
// */

    console.log("Exercício 02");
    for (indice = 0; indice < timesDeFutebol.length; indice ++)
    {
        console.log("Execução com For n°", indice+1 + " = " + timesDeFutebol[indice]);
        console.log("------------------------------------");
    }

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

//Ex 04

    let numA = 1910;
    let numB = 777;

    function retornaMaior(numA, numB){
        if(numA > numB){
            return numA,
            numMaior = numA
        }
        else{
            return numB,
            numMaior = numB
        }
    }
    console.log(numMaior)

//Ex 05

    let valorMaior = max(5, 9);
    function max(numC, numD) {
    if (numC > numD)
        return numC;
    else return numD;
    }
    console.log(valorMaior);

//Ex 06

    let valorMaiorDois = max(1500, 9);
    function max(numE, numF) {
    if (numE > numF)
        return numE;
        return numF;
    }
    console.log(valorMaiorDois);

//Ex 07
    let valorMaiorTres = max(777, 0);
    function max(numG, numH) {
        return numG > numH ? numG : numH;
    } console.log(valorMaiorTres);
    console.log("18 - FizzBuzz")

//Ex 08

    /*
    se div por 3 = fizz
    se div por 5 = buzz
    se div por 15 = fizzbuzz
    se não div por 3 ou 5 = entrada
    se NaN = NaN
    */
    const resultado02 = fizzBuzz(30);
    console.log(resultado02);

    function fizzBuzz(entrada) {
    if ((entrada % 3 === 0) || (entrada % 5 === 0))
        return 'FizzBuzz';
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return 'entrada';
    };

//Ex 09

    verificarVelocidade(95)

    function verificarVelocidade(velocidade) {
    const valorVelocidadeMaxima = 70;
    const kmPonto = 5;
        if (velocidade <= valorVelocidadeMaxima)
            console.log('Sem Problema');
        else {
            const pontos = Math.floor((velocidade - valorVelocidadeMaxima) / kmPonto);
            if (pontos >= 12)
            console.log('Carteira SUSPENA');
            else {
            console.log('Pontos =', pontos)
            }
        }
    };

//Ex 10

    exibirTipo(10);
    function exibirTipo (limite) {
        for (i = 0; i <= limite; i++) {
            if (i % 2 === 0)
            console.log(i, 'PAR');
            else 
            console.log(i, 'IMPAR');
        }
    };