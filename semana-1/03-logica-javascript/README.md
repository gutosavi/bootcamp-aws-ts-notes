# Anotações teóricas sobre a semana 1

## Lógica de Programação e Estrutura de Dados com JavaScript

### Variáveis e tipos de valores

Variável é um endereço na memória que armazena um valor;

Temos 3 formas de atribuir valor a uma variável: **var** (pouco utilizado no JS atual), **let** e **const**; A diferença entre eles está no **escopo**, isto é, onde a variável pode ser acessada e nas regras de reatribuição e redeclaração.

- **var**: é a forma mais antiga de declarar variáveis (quase não é mais utilizada);
- **let**:
  - possui escopo de bloco;
  - permite atualizar o valor, mas não permite ser redeclarada no mesmo escopo;
  - deve ser usada quando o valor da variável precisa mudar ao longo do tempo;
- **const**:
  - possui escopo de bloco;
  - **não** pode ser atualizada nem redeclarada;
  - exige que um valor seja atribuído obrigatoriamente no momento da declaração;
  - Em objetos e arrays declarados com const, as propriedades internas ainda podem ser modificadas, mas a variável em si não pode receber um novo objeto ou valor;

### Tipos de dados

- `String` (texto)
- `Number` (decimal ou inteiro)
- `Boolean` (true ou false)
- `null` (quando você atribui uma variável como null de forma proposital)
- `undefined` (variável que ainda não recebeu um valor)
- `NaN` (não é um número)

Você pode usar o `typeof` para saber qual é o tipo do dado.

### Valores falsy e truthy

Valores que o JS considera **false** ou **true** quando convertidos para booleanos.

- **falsy**: false, 0, "" (string vazia), null, undefined, NaN
- **truthy**: todos os outros (números diferentes de 0, strings não vazias, objetos, etc.)

### Operadores de comparação

== Igualdade (apenas valor)  
=== Igualdade (valor e tipo)  
!= Diferente (apenas valor)  
!== Diferente (valor e tipo)  
< Menor que  
<= Menor ou igual à
`> Maior que  
`>= Maior ou igual à

### Operadores lógicos

**! - Negação**
**&& - E**
**|| - Ou**

#### Tabela verdade

| Expressões    | && (E) |  (Ou) |
| ------------- | -----: | ----: |
| false - false |  false | false |
| false - true  |  false |  true |
| true - false  |  false |  true |
| true - true   |   true |  true |

| Expressão | ! (Negação) |
| --------- | ----------: |
| false     |        true |
| true      |       false |

### Controle de decisão

Estruturas condicionais permitem que o programa tome decisões diferentes de acordo com uma condição.

- **if/else**
  Usado quando precisamos executar diferentes blocos de código dependendo de uma ou mais condições;

- **switch case**
  Útil quando precisamos comparar uma mesma expressão com diferentes valores possíveis (Ex.: dias da semana). Lembrar sempre da necessidade de adicionar o break para interromper a execução do switch e também adicionar default ao final, quando nenhum case corresponde ao valor.

### Laços de repetição

Laços permitem executar um determinado bloco de código repetidamente enquanto uma condição for atendida ou para percorrer uma sequência de valores.

- **for**
  Indicado quando sabemos ou conseguimos controlar a quantidade de repetições.

- **while**
  Executa enquanto a condição for verdadeira. A condição é verificada antes de cada repetição.

- **do...while**
  Parecido com o while, mas a condição é verificada depois da execução. Portanto, o bloco é executado pelo menos uma vez.

- **for...of**
  Utilizado principalmente para percorrer valores de estruturas iteráveis, como arrays.

### Arrays e Objetos

Arrays são estruturas de dados utilizadas em JavaScript para organizar e trabalhar com informações.

- **Arrays**

  São estruturas utilizadas para armazenar uma coleção de valores em uma única variável. Os elementos são organizados por índices, começando pelo 0. (Ex.: `const frutas = ['maçã', 'banana', 'laranja']`)  
  Os elementos podem ser acessados, alterados e adicionados:
  - `frutas[1] = 'uva'`;
  - `frutas.push('abacaxi')`;

  **Métodos básicos**
  - `push()` - adiciona um elemento ao final.
  - `pop()` - remove o último elemento.
  - `shift()` - remove o primeiro elemento.
  - `unshift()` - adiciona um elemento no início.
  - `length` - informa a quantidade de elementos.

  Arrays também pode ser percorridos utilizando estruturas de repetição, como for, for...of e métodos específicos de arrays.

- **Objetos**

  Objetos são estruturas utilizadas para representar informações através de propriedades formadas por **chave** e **valor**.

  Podemos acessar suas propriedades utilizando a notação de ponto ou colchetes:
  - `usuario.nome`;
  - `usuario["idade"]`;

  Também é possível alterar ou adicionar propriedades:
  `usuario.idade = 38`;
  `usuario.email = 'gustavo@email.com'`

- **Objetos e Estruturas complexas**
  Objetos podem conter diferentes tipos de dados, inclusive arrays e outros objetos.
  Ex.: `const usuario = { nome: "Gustavo", habilidades: ["HTML", "CSS", "JavaScript"], endereco: { cidade: "Sananduva", estado: "RS", }, };`

### Funções

É um bloco de código reutilizável que recebe entradas, executa uma lógica e pode produzir uma saída.

**Principais conceitos**

- **Declaração**: definição da função.
- **Parâmetros**: valores que a função recebe.
- **Argumentos**: valores passados ao chamar a função.
- **return**: devolve um resultado e encerra a execução da função.
- **Valor do retorno**: resultado produzido pela função.
- **Arrow function**: forma alternativa de declarar funções.
- **Função sem retorno**: executa uma ação, mas não devolve um valor útil.
- **Reutilização**: a mesma função pode ser chamada várias vezes com diferentes argumentos.
- **Escopo**: determina onde variáveis e parâmetros pode ser acessados.

**Conceito principal**

Entrada -> processamento -> saída

**Function Declaration, Function Expression e Arrow Function**

- **Function Declaration**: é a declaração tradicional e usa a palavra-chave function seguida por um nome. Ex.: `function somar(a, b) { return a + b; }`
  - **Característica**: sofre _hoisting_ completo. Você pode chamar a função no código antes mesmo da linha onde ela foi declarada.
  - **Quando usar**:
    - Para criar funções globais ou utilitárias que precisam ficar disponíveis em qualquer parte do arquivo.
    - Quando você prefere organizar o código chamando as funções principais no topo e definindo-as mais abaixo.

- **Function Expression**: a função é criada como um valor e atribuída a uma variável ou constante. Ex.: `const somar = function(a, b) { return a + b; }`
  - **Característica**: não sofre _hoisting_ da mesma forma. A variável é registrada, mas o valor da função só existe após a linha da atribuição.
  - **Quando usar**:
    - Para limitar onde a função pode ser usada, garantindo mais segurança e controle de escopo.
    - Quando a função deve existir apenas sob certas condições.
    - Como argumentos passados para outras funções (callbacks tradicionais).

- **Arrow Function**: é uma forma mais curta de escrever funções usando a set =>. Ela não usa palavra-chave function e tem retorno implícito quando ocupa apenas uma linha. Ex.: `const somar = (a, b) => a + b`;

- **Característica**: não possui seu próprio `this`. Ela herda o `this` do escopo léxico onde foi criada.
- **Quando usar**:
  - Em métodos de array como `.map()`, `.filter()` e `.reduce()`, onde o código fica mais limpo e curto.
  - Em funções de callback simples.
  - Quando você precisa preservar o contexto `this` do elemento pai (como dentro de callbacks de classes ou componentes).
- **Quando NÃO usar**:
  - Em métodos de objetos que precisam acessar propriedades do próprio objeto usando `this`.
  - Como funções construturas (não podem ser chamadas com new).

### Introdução à Programação Orientada a Objetos - POO

É um paradigma de programação que organiza o código utilizando objetos, que agrupam dados (atributos) e ações (métodos) relacionados.

A ideia é representar entidades do sistema e suas responsabilidades, facilitando a **organização, reutilização e manutenção do código**.

**Como funciona?**
Ao invés de apenas escrever uma lista de comandos, você cria objetos que possuem estado (dados) e comportamentos (ações).

Por exemplo, um objeto Usuário pode ter:

- **Atributo**: nome, e-mail, idade.
- **Métodos**: `fazerLogin()`, `atualizarEmail()`, `sair()`;

**Conceitos básicos**

- **Classe**: É um molde/estrutura que define quais atributos e comportamentos os objetos daquele tipo terão.
- **Objeto**: É uma instância de uma classe, ou seja, um objeto criado a partir daquele molde.
- **Atributo**: é um dado ou característica do objeto.
- **Método**: é uma função que representa um comportamento ou ação do objeto.
- **Instância**: é o objeto concreto criado a partir de uma classe.

**4 pilares**:

- **Encapsulamento**: controla o acesso aos dados.
- **Abstração**: esconde detalhes desnecessários.
- **Herança**: reutiliza características de outra classe.
- **Polimorfismo**: diferentes objetos podem responder de formas diferentes à mesma operação.

**Getters e Setters**

São métodos especiais usados para controlar o acesso e a modificação das propriedades de uma classe.

Eles funcionam como "seguranças na porta da propriedade". O **Getter** intercepta a leitura de um valor e o **Setter** intercepta a atribuição de um novo valor.

**Para que servem**:

- **Validação ao alterar dados (Setter)**: Evita que o objeto receba dados inválidos (ex.: idade negativa, saldo menor que zero).
- **Campos calculados na leitura (Getter)**: Permite retornar valores derivados sem precisar armazenar uma nova variavel na memória.
- **Encapsulamento**: Acessa e altera propriedades privadas como se fosse variáveis comuns, mas por baixo dos panos executa uma função com regras.

#### Importante: Métodos vs. Getters & Setters

Ao modelar uma Classe, utilize a seguinte regra para decidir a melhor abordagem:

- **Use Métodos (`minhaFuncao()`)**: Sempre que a regra tratar de uma **Ação ou Operação do Sistema** (verbos como `sacar()`, `depositar()`, `enviarFormulario()`, `autenticar()`). Métodos indicam a execução de um processo que pode envolver múltiplos passos, regras de negócio ou efeitos colaterais.
- **Use Getters e Setters (`get` / `set`)**: Quando a intenção for **Leitura, Formatação ou Validação Simples de Atributos** (como validar se um valor é positivo, checar maioridade ou formatar um texto antes de retornar). A sintaxe de atribuição (`objeto.propriedade = valor`) deve ser reservada para a gestão do estado do próprio objeto.
