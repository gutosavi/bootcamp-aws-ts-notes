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
| public      |                    Sim |                                Sim |                  Padrão do TS. Qualquer um lê e altera livremente |
| private     |                    Não |                                Não |         Apenas a própria classe enxerga. Protege o estado interno |
| protected   |                    Não |                                Sim | A própria classe e as herdeiras enxergam, mas o mundo externo não |

- `public`: Se você não colocar nada antes da propriedade, o TS assume que ela é `public`.
- `private`: A sua intenção é impedir que o código de fora modifique a propriedade diretamente sem passar por validaçao.
- `protected`: Útil quando você cria uma classe base (ex.: `Veiculo`) e quer que as classes filhas (ex.: `Carro`, `Moto`) usem a propriedade, mas a aplicação de fora não.
- `readonly`(Apenas leitura): Define que um valor pode ser atribuído apenas na criação da classe (no `constructor`) e nunca mais pode ser alterado.
