# Bridge

## O que é?

Bridge é um Design Pattern que **separa uma abstração de sua implementação**, permitindo que ambas evoluam de forma independente.

## Qual problema resolve?

Evita que uma abstração fique diretamente acoplada a uma implementação específica, facilitando a **substituição e extensão de ambas sem grandes alterações no código**.

## Quando utilizar?

Quando existem **diferentes abstrações e implementações que precisam variar de forma independente**, evitando a criação de muitas subclasses para representar todas as combinações possíveis.

## Exemplo

O modelo feito pelos instrutores utiliza plataformas de transmissão de lives, como Twitch e YouTube, para demonstrar a separação entre a abstração e sua implementação.

A aplicação pode possuir diferentes tipos de transmissão, enquanto cada plataforma possui sua própria forma de realizar a transmissão. O Bridge permite separar essas duas partes, possibilitando combinar diferentes tipos de transmissão com diferentes plataformas sem criar uma classe específica para cada combinação.
