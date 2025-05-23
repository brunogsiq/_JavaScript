// 🧠 **Guia Rápido de JavaScript para QA**

    // Executando arquivo

    /*node nomeArquivo.js */

    // 1. Declaração de Variáveis**

        let nominho = "Bruno";
        const idade = 30;
        var ativo = true;

            //Exemplos:
                //Pode ser alterado - Tipo String
                var nome = "Corinthians";
                nome = "SCCP";
                //Pode ser alterado - Tipo String
                let ano = 1910;
                ano = 2012;
                // NÃO pode ser alterado
                const torcida = "Gaviões da Fiel";

    // 2. Estruturas de Controle**

        // Condicional `if`

        if (idade > 18) {
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }

            // Exemplos:
                const nomez = "Bruno"

                if (nomez == "Bruno") {
                    console.log("É igual")
                } else {
                    console.log("Não é igual")
                }

        // Switch

        let status = "falha";

        switch (status) {
            case "sucesso":
                console.log("Teste passou");
                break;
            case "falha":
                console.log("Teste falhou");
                break;
            default:
                console.log("Status desconhecido");
        }

    // 3. Laços de Repetição**

        for (let i = 0; i < 3; i++) {
            console.log("Execução número: " + i);
        }

            // Exemplo:
                let indice;
                //Inicia em zero + Condição + Incremento

                for (indice=0; indice < 10; indice++)
                {
                    indice = array[indice];
                };

                for (indice = 0; indice < cidades.length; indice++)
                {
                    console.log("Os estados são: " + cidades[indice]);
                };

    // 4. Funções**

        function somar(a, b) {
            return a + b;
        }

        let resultado = somar(2, 3);

        function gerarNome() {
            const name = 'Bruno';
            const sobreName = 'Siqueira';
            const age = "38";

            console.log("Nome: " + name + sobreName);
            console.log("Idade: " + age);
        }

        gerarNome();

        //Adicionando valores a função criada

        somar("190", "150");
        gerarNome("Vai", "Corinthians", 1910);
        //Estes valores são os parâmetros da minha função.
        // Arrow Function:

        const multiplicar = (x, y) => x * y;

    // 5. Arrays e Objetos (Muito usados em testes)**

        // Array

        let nomes = ["Bruno", "Ana", "Carlos"];
        console.log(nomes[1]); // Ana

            // Exemplos:
                const pais = ["Brasil", "Argentina", "Alemanha", "1", "2", "3"];

                console.log(pais[0]);

                //Adicionando item
                pais.push("Marrocos");

                //Adicionando a primeira posição
                pais.unshift("Bolívia");

                //Removendo da primeira posição
                pais.shift();

                //Removendo item
                pais.pop();

                const cidades = ["SP", "BA", "MG",]

                cidades.forEach((elemento, index) => {
                    console.log("Execução número: " + index + " = " + elemento)
                    console.log(elemento);
                })

        // Objeto

        let usuario = {
            nome: "Bruno",
            idade: 30,
            ativo: true
        };

            // Exemplos: 
                let devices = {
                    Samsung: {
                        "Preço": 5000,
                        "Modelo" : "A53",
                        Cores: {
                            cor1: "branco",
                            cor2: "azul",
                            cor3: "amarelo"
                        }
                    },
                };

        console.log(usuario.nome); // Bruno

    // 6. DOM (para testes com Cypress ou Playwright)**

        document.querySelector("#botao").click();
        document.getElementById("campoEmail").value = "teste@email.com";

    // 7. Promises e Async/Await (para lidar com APIs)**

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => console.log(data));

        async function buscarDados() {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const dados = await resposta.json();
            console.log(dados);
        }

    // 8. Validações (muito usadas em testes)**

        let esperado = "Login realizado com sucesso";
        let recebido = "Login realizado com sucesso";

        if (esperado === recebido) {
            console.log("✅ Teste passou!");
        } else {
            console.log("❌ Teste falhou!");
        }

    // 9. Exemplo real com Cypress**

        describe("Teste de login", () => {
            it("Deve fazer login com sucesso", () => {
                cy.visit("https://meusite.com/login");
                cy.get("#email").type("teste@qa.com");
                cy.get("#senha").type("123456");
                cy.get("#btnLogin").click();
                cy.contains("Bem-vindo").should("be.visible");
            });
        });