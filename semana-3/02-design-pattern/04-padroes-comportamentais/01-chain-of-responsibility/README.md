# Chain of Responsibility

## O que é?

Chain of Responsibility é um Design Pattern que organiza uma sequência de objetos responsáveis por **processar uma solicitação**, passando-a para o próximo caso o objeto atual não possa tratá-la.

## Qual problema resolve?

Evita que o código fique cheio de condicionais (`if/else`) para decidir **quem deve tratar determinada solicitação**, distribuindo essa responsabilidade entre diferentes objetos.

## Quando utilizar?

Quando uma solicitação pode ser tratada por **diferentes objetos**, dependendo das condições, e queremos que esses objetos possam ser adicionados, removidos ou reorganizados na cadeia.

## Exemplo

O exemplo utiliza um ambiente de login para demonstrar o funcionamento do **Chain of Responsibility** através de middlewares. Cada middleware é responsável por verificar uma determinada condição, como autenticação ou autorização, e pode interromper a requisição ou encaminhá-la para o próximo middleware da cadeia.

Dessa forma, cada etapa possui uma responsabilidade específica, evitando concentrar todas as verificações em um único bloco de código.
