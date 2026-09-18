# Anotações teóricas sobre a semana 2

## TypeScript - Princípios S.O.L.I.D.

O **S.O.L.I.D.** é um acrônimo para cinco princípios de design de código Orientado a Objetos (POO). Eles servem como guia para escrever códigos mais limpos, flexíveis, fáceis de manter e testar.

### S - Single Responsibility Principle (Princípio da Responsabilidade Única)

**_"Uma Classe deve ter apenas um, e apenas um, motivo para mudar"_**

- **O problema**: Criar classes "Deus" (God Classes) que fazem de tudo: calculam regras de negócio, salvam no banco de dados, enviam e-mails e formatam relatórios.

- **A Solução**: Separe as responsabilidades em classes distintas e focadas.

### O - Open/Closed Principle (Princípio do Aberto/Fechado)

**_"Entidades de software devem estar abertas para extensão, mas fechadas para modificação."_**

- **O problema**: Toda vez que surge um novo requisito (ex.: um novo tipo de desconto), você precisa alterar o código original usando múltiplos `if/else` ou `switch`.

**A Solução**: Use **interfaces**, **classes abstratas** ou **polimorfismo** para estender comportamento sem alterar o código que já funciona e foi testado.

### L - Liskov Substitution Principle (Princípio da Subtituição de Liskov)

**_"Classes derivadas devem ser capazes de substituir totalmente suas classes base sem quebrar o comportamento da aplicação."_**

- **O Problema**: Criar uma subclasse que herda de uma classe pai, mas altera ou remove um comportamento esperado (ex.: lançar uma exceção em um método herdade porque ele "não se aplica").

- **A Solução**: Se `Cachorro` é subclasse de `Animal`, então onde se espera um objeto `Animal`, você deve conseguir passar um objeto `Cachorro` sem efeitos colaterais.

### I - Interface Segregation Principle (Princípio da Segregação de Interfaces)

**_"Nenhum cliente deve ser forçado a depender de interfaces que ele não utiliza."_**

- **O Problema**: Criar interfaces "gordas" com dezenas de métodos obriga as classes que as implementam a deixar métodos vazios ou lançar erros para os que não usam.

- **A Solução**: Prefira múltiplas interfaces pequenas e específicas em vez de uma interface única e genérica.

### D - Dependency Inversion Principle (Princípio da Inversão de Dependência)

**_"Módulo de alto nível não deve depender de módulos de baixo nível. Ambos devem depender de abstrações."_**

- **O Problema**: A sua classe principal instala ou acopla diretamente uma biblioteca externa ou banco de dados específico (ex.: usar `new PostgresDatabase()` direto na classe de serviço).

- **A Solução**: Dependa sempre de **interfaces (abstrações)**. A implementação concreta (MySQL, Postgres, RepositorioEmMemoria) é injetada por fora.
