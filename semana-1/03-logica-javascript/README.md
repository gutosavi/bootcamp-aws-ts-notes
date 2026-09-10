# Anotações teóricas sobre a semana 1

---

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

- String (texto)
- Número (decimal ou inteiro)
- Boolean (true ou false)
- null (quando você atribui uma variável como null de forma proposital)
- undefined (variável que ainda não recebeu um valor)
- NaN (não é um número)

Você pode usar o typeof para saber qual é o tipo do dado.

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

> Maior que
> = Maior ou igual à

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

### Laçoes de repetição

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
  São estruturas utilizadas para armazenar uma coleção de valores em uma única variável. Os elementos são organizados por índices, começando pelo 0. (Ex.: const frutas = ['maçã', 'banana', 'laranja'])
  Os elementos podem ser acessados, alterados e adicionados:
  - frutas[1] = 'uva';
  - frutas.push('abacaxi');

  **Métodos básicos**
  - push() - adiciona um elemento ao final.
  - pop() - remove o último elemento.
  - shift() - remove o primeiro elemento.
  - unshift() - adiciona um elemento no início.
  - length - informa a quantidade de elementos.

  Arrays também pode ser percorridos utilizando estruturas de repetição, como for, for...of e métodos específicos de arrays.

- **Objetos**
  Objetos são estruturas utilizadas para representar informações através de propriedades formadas por **chave** e **valor**.
  Podemos acessar suas propriedades utilizando a notação de ponto ou colchetes:
  - usuario.nome;
  - usuario["idade"];

  Também é possível alterar ou adicionar propriedades:
  usuario.idade = 38;
  usuario.email = 'gustavo@email.com'

- **Objetos e Estruturas complexas**
  Objetos podem conter diferentes tipos de dados, inclusive arrays e outros objetos.
  Ex.: const usuario = { nome: "Gustavo", habilidades: ["HTML", "CSS", "JavaScript"], endereco: { cidade: "Sananduva", estado: "RS", }, };

## Funções

É um bloco de código reutilizável que recebe entradas, executa uma lógica e pode produzir uma saída.
