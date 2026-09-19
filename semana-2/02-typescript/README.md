# Anotações teóricas sobre a semana 2

## JavaScript e TypeScript

### Programação Orientada a Objetos - POO

A **Programação Orientada a Objetos (POO)** é um paradigma que organiza o código a partir de **objetos**, seus **dados** e seus **comportamentos**.  
Seu objetivo é facilitar a **organização, reutilização e manutenção do código**, representando entidades e suas responsabilidades.

**Os 4 pilares**:

- **Encapsulamento**: controla o acesso aos dados.
- **Abstração**: esconde detalhes desnecessários.
- **Herança**: reutiliza características de outra classe.
- **Polimorfismo**: diferentes objetos podem responder de formas diferentes à mesma operação.

---

### Classes em TypeScript

Uma classe é um molde utilizado para criar objetos que possuem propriedades e métodos.

- **Atributos/propriedades**: representam os dados ou estado do objeto.
- **Métodos**: representam comportamentos.
- **Instâncias**: são os objetos criados a partir da classe.

```
class Usuario {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  apresentar(): void {
    console.log(`Olá, sou ${this.nome}`);
  }
}

const usuario = new Usuario('Gustavo');
```

**Constructor**  
O `constructor`é executado quando uma instância da classe é criada com `new`.  
É utilizado principalmente para **inicializar o estado incial do objeto**.

---

**Modificadores de Acesso**

A função principal deles é **definir quem pode ler ou alterar as propriedades e métodos de uma classe**, além de previnir bugs de alteração acidental.

| Modificador | Acesso fora da Classe? | Acesso em Classes Filhas (Herança) |                                                     Uso Principal |
| ----------- | ---------------------: | ---------------------------------: | ----------------------------------------------------------------: |
| `public`    |                    Sim |                                Sim |                  Padrão do TS. Qualquer um lê e altera livremente |
| `private`   |                    Não |                                Não |         Apenas a própria classe enxerga. Protege o estado interno |
| `protected` |                    Não |                                Sim | A própria classe e as herdeiras enxergam, mas o mundo externo não |

- `public`:  
  Se você não colocar nada antes da propriedade, o TS assume que ela é `public`.

```
class Usuario {
  public nome: string;
}
```

- `private`:  
  A sua intenção é impedir que o código de fora modifique a propriedade diretamente sem passar por validaçao.

```
class Conta {
  private saldo: number = 0;
}
```

- `protected`:  
  Útil quando você cria uma classe base (ex.: `Veiculo`) e quer que as classes filhas (ex.: `Carro`, `Moto`) usem a propriedade, mas a aplicação de fora não.

```
class Veiculo {
  protected velocidade: number = 0;
}

class Carro extends Veiculo {
  acelerar() {
    this.velocidade += 10;
  }
}
```

---

- `readonly`(Apenas leitura):  
  Define que um valor pode ser atribuído apenas na criação da classe (no `constructor`) e nunca mais pode ser alterado.

```
class Usuario {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

Depois da inicialização:
usuario.id = 10; // erro
```

`readonly` é uma proteção do TS em tempo de compilação. Ele não transforma automaticamente o valor em uma constante imutável em runtime.

---

**Getters e Setters**

Permitem controlar o acesso a propriedades utilizando uma sintaxe semelhante à de uma propriedade.

- `get`: controlam a leitura.
- `set`: controla a atribuição.

São especialmente úteis quando uma propriedade precisa de **validação ou alguma regra antes de ser alterada**.

```
class Conta {
  private _saldo = 0;

  get saldo() {
    return this._saldo;
  }

  set saldo(valor: number) {
    if (valor >= 0) {
      this._saldo = valor;
    }
  }
}
```

Assim, o estado interno continua protegido, mas a classe oferece uma forma controlada de acessá-lo.

---

**Método / Atributo `static`**

`static` indica que uma propriedade ou método pertence à **classe**, e não às suas instâncias.  
Por isso, não é necessário utilizar `new` para acessá-los.

```
class Matematica {
  static somar(a: number, b: number) {
    return a + b;
  }
}
Matematica.somar(2, 3);
```

É comum utilizar `static` para **funções utilitárias ou valores relacionados à própria classe**, que não dependem do estado de uma instância específica.

---

**Herança**

A herança permite que uma classe aproveite características de outra.  
Utiliza-se `extends`.

```
class Animal {
  comer() {
    console.log('Comendo...');
  }
}

class Cachorro extends Animal {
  latir() {
    console.log('Au au!');
  }
}
```

`Cachorro` herda o método `comer()` de Animal.  
A classe que fornece a estrutura é chamada de **classe base/superclasse**.  
A classe que herda é chamada de **classe filha/subclasse**.

---

**Classe, métodos e atributos abstratos**

- **Classe abstrata**  
  Uma classe abstrata é um modelo genérico que **não pode ser instanciada**. Isso significa que você não consegue criar um objeto diretamente a partir dela (usando `new` por exemplo).  
  Ela funciona como uma superclasse para organizar e reutilizar códigos comuns entre várias outras classes.

  ```
  abstract class Animal {
    abstract fazerBarulho(): void;
  }
  ```

  O objetivo é definir uma estrutura ou contrato comum para as classes filhas.

- **Método abstrato**  
  Um método abstrato é uma função declarada que não tem corpo nem código de execução na classe pai. Ela possui apenas o nome, os parâmetros e o tipo do retorno.

  ```
  abstract fazerBarulho(): void;
  ```

  A **regra principal** é se uma classe tem um método abstrato, essa classe é obrigada a ser abstrata. Além disso, qualquer classe filha que herdar essa classe **deve obrigatoriamente implementar** esse método.

  ```
  class Cachorro extends Animal {
    fazerBarulho() {
      console.log('Au au!');
    }
  }
  ```

- **Atributo abstrato**  
  Uma propriedade abstrata define que as classes concretas deverão fornecer essa propriedade.
  ```
  abstract class Animal {
    abstract especie: string;
  }
  ```
  A classe filha deverá definir `especie`.

---

**Polimorfismo**

Polimorfismo significa que diferentes classes podem implementar o **mesmo contrato ou comportamento** de maneiras diferentes.

```
abstract class Animal {
  abstract fazerBarulho(): void;
}

class Cachorro extends Animal {
  fazerBarulho() {
    console.log('Au au!');
  }
}

class Gato extends Animal {
  fazerBarulho() {
    console.log('Miau!');
  }
}
```

Ambos possuem fazerBarulho(), mas cada classe possui sua própria implementação.  
Isso permite trabalhar com diferentes objetos por meio de uma mesma abstração.

---

**Interfaces**

Uma `interface` define um **contrato de estrutura** que um objeto ou classe deve seguir.

```
interface Usuario {
  nome: string;
  idade: number;
}
```

Uma classe pode implementar uma interface utilizando `implements`.

```
class Pessoa implements Usuario {
  nome: string; idade:
  number;
  constructor(nome: string, idade: number) {
    this.nome = nome; this.idade = idade;
  }
}
```

`extends` x `implements`

- `extends`: uma classe **herda** de outra classe.
- `implements`: uma classe segue o contrato definido por uma interface.

Uma classe pode implementar várias interfaces, enquanto só pode estender uma classe.

---

**Associação entre classes**

Representa a relação entre diferentes objetos/classes.

- **Associação simples**: Uma classe usa a outra pontualmente, mas elas existem de forma independente.  
  **Exemplo**: Um `Pedido` que precisa de um `Cliente` para ser finalizado.
- **Agregação (Todo-Parte fraco)**: Representa uma relação **todo-parte**, mas as partes podem existir independentemente do todo.  
  **Exemplo**: Um `Carro` tem `Pneus`. Se o carro for desmanchado, os pneus ainda existem.
- **Composição (Todo-Parte Forte)**: Também representa uma relação **todo-parte**, mas a parte possui uma dependência mais forte em relação ao todo.  
  **Exemplo**: Uma `Casa` tem `Cômodos`. Se a casa é destruída, os cômodos deixam de existir como tal.

Em termos conceituais, os cômodos fazem parte da existência da casa.  
Em TypeScript/JavaScript, agregação e composição são conceitos de modelagem. A linguagem não destrói automaticamente os objetos relacionados quando o objeto "todo" deixa de existir.

**constructor, extends e implements**

**`constructor`**

O `constructor` é um método especial executado automaticamente quando uma instância é criada com `new`.

Sua principal função é **inicializar as propriedades do objeto**.

```
class Usuario {
  constructor(public nome: string) {}
}

const usuario = new Usuario('Gustavo');

```

Nesse caso, o `constructor` recebe o nome e inicializa a propriedade nome da nova instância.

**`extends`**

`extends` permite que uma classe **herde atributos e métodos de outra classe**.

```
class Animal {
  comer() {
    console.log('Comendo...');
  }
}

class Cachorro extends Animal {
  latir() {
    console.log('Au au!');
  }
}
```

`Cachorro` herda `comer()` de `Animal` e também pode possuir seus próprios métodos.

**Em resumo**: `extends` representa uma relação de herança.

**`implements`**

`implements` indica que uma classe deve **seguir o contrato definido por uma interface**.

```
interface Usuario {
  nome: string;
}

class Pessoa implements Usuario {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
```

Ao utilizar `implements`, a classe precisa fornecer as propriedades e métodos exigidos pela interface.

**Em resumo**:

- `constructor`: inicializa a instância.
- `extends`: herda de outra classe.
- `implements`: segue o contrato da interface.

**Resumo Rápido**

| Conceito         |                           Ideia Principal |
| ---------------- | ----------------------------------------: |
| Classe           |                  Molde para criar objetos |
| Objeto/instância |      Objeto criado a partir de uma classe |
| Atributo         |                     Dado/estado do objeto |
| Método           |                   Comportamento do objeto |
| Constructor      |                    Inicializa a instância |
| Encapsulamento   |       Protege e controla o estado interno |
| Abstração        |        Esconde os detalhes desnecessários |
| Herança          |  Reutiliza estrutura através de `extends` |
| Polimorfismo     | Mesmo contrato, diferentes comportamentos |
| `public`         |                              Acesso geral |
| `private`        |                  Somente a própria classe |
| `protected`      |                      Classes e subclasses |
| `readonly `      |  Impede nova atribuição após incialização |
| `static `        |        Pertence à classe, não à instância |
| Interface        |           Define um contrato de estrutura |
| `implements`     |       Faz uma classe seguir uma interface |
| Associação       |                     Relação entre classes |
| Agregação        |              Todo-parte com independência |
| Composisão       |     Todo-parte com dependência mais forte |
