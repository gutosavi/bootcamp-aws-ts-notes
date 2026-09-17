# Anotações teóricas sobre a semana 2

## JavaScript e TypeScript

### Programação Orientada a Objetos - POO

Para relembrar, a POO é um paradigma de programação que organiza o código utilizando objetos. A ideia principal é representar entidades do sistema e suas responsabilidades, facilitando a **organização, reutilização e manutenção do código**.

A POO é composta por 4 pilares:

- **Encapsulamento**: controla o acesso aos dados.
- **Abstração**: esconde detalhes desnecessários.
- **Herança**: reutiliza características de outra classe.
- **Polimorfismo**: diferentes objetos podem responder de formas diferentes à mesma operação.

O entendimento destes conceitos serão importantes para a criação dos moldes das classes em TypeScript.

### Classes em TypeScript

**Modificadores de Acesso**

No TS, a função principal deles é **definir quem pode ler ou alterar as propriedades e métodos de uma classe**, além de previnir bugs de alteração acidental.

| Modificador | Acesso fora da Classe? | Acesso em Classes Filhas (Herança) |                                                     Uso Principal |
| ----------- | ---------------------: | ---------------------------------: | ----------------------------------------------------------------: |
| `public`    |                    Sim |                                Sim |                  Padrão do TS. Qualquer um lê e altera livremente |
| `private`   |                    Não |                                Não |         Apenas a própria classe enxerga. Protege o estado interno |
| `protected` |                    Não |                                Sim | A própria classe e as herdeiras enxergam, mas o mundo externo não |

- `public`: Se você não colocar nada antes da propriedade, o TS assume que ela é `public`.
- `private`: A sua intenção é impedir que o código de fora modifique a propriedade diretamente sem passar por validaçao.
- `protected`: Útil quando você cria uma classe base (ex.: `Veiculo`) e quer que as classes filhas (ex.: `Carro`, `Moto`) usem a propriedade, mas a aplicação de fora não.
- `readonly`(Apenas leitura): Define que um valor pode ser atribuído apenas na criação da classe (no `constructor`) e nunca mais pode ser alterado.

**Getters e Setters**

São métodos especiais com sintaxe de propriedade que controlam a leitura (`get`) e a escrita (`set`) de atributos privados. Ao invés de expor o atributo `private` diretamente, o `get` permite ler o valor e o `set` permite validar o valor antes de alterar.

**Método / Atributo `static`**

O modificador `static` indica que a propriedade ou método **pertence à classe em si**, e não às instâncias criadas com `new`. Para criar funções utilitárias ou constantes globais relacionadas àquele contexto que não dependem do estado de objeto específico.

**Classe, métodos e atributos abstratos**

- **Classe abstrata**  
  Uma classe abstrata é um modelo genérico que não pode ser instanciada. Isso significa que você não consegue criar um objeto diretamente a partir dela (usando `new` por exemplo).  
  Ela funciona como uma superclasse para organizar e reutilizar códigos comuns entre várias outras classes.

  **Exemplo**  
  Pense na classe genérica `Animal`. Não existe um animal solto que seja apenas "animal"; ou é um `Cachorro` ou um `Gato`. Logo, `Animal` seria a classe abstrata base.

- **Método abstrato**  
  Um método abstrato é uma função declarada que não tem corpo nem código de execução na classe pai. Ela possui apenas o nome, os parâmetros e o tipo do retorno.
  A **regra principal** é se uma classe tem um método abstrato, essa classe é obrigada a ser abstrata. Além disso, qualquer classe filha que herdar essa classe **deve obrigatoriamente implementar** esse método.

  **Exemplo**  
  Na classe `Animal`, o método `fazerBarulho()` pode ser abstrato. A classe filha `Cachorro` vai escrever o código desse som como "Au Au", enquanto a classe `Gato` vai escrever "Miau".

- **Atributo abstrato**  
  Um dado ou propriedade que a classe filha é obrigada a definir ou possuir para que o sistema funcione corretamente dentro do padrão da classe pai.

**Tipos de Associação**

- **Associação simples**: Uma classe usa a outra pontualmente, mas elas existem de forma independente.  
  **Exemplo**  
  Um `Pedido` que precisa de um `Cliente` para ser finalizado.

- **Agregação (Todo-Parte fraco)**: Um objeto contém outro, mas se o objeto principal deixar de existir, a parte continua existindo sozinha.  
  **Exemplo**  
  Um `Carro` tem `Pneus`. Se o carro for desmanchado, os pneus ainda existem.

- **Composição (Todo-Parte Forte)**: Um objeto contém outro, e a parte **não pode existir** sem o todo. Se o objeto principal for destruído, a parte também é.  
  **Exemplo**  
  Uma `Casa` tem `Cômodos`. Se a casa é destruída, os cômodos deixam de existir como tal.
