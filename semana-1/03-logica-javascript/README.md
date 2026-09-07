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
