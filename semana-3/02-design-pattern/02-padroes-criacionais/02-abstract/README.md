# Abstract factory

## O que é?

É um recurso utilizado para definir **classes abstratas**, que servem como uma base para outras classes. Uma classe abstrata não pode ser instanciada diretamente e pode definir métodos que as classes filhas deverão implementar.

## Qual problema resolve?

Permite **compartilhar uma estrutura e comportamentos comuns** entre classes relacionadas, enquanto deixa determinados detalhes de implementação para as classes filhas.

Isso ajuda a evitar duplicação e estabelece um contrato para as subclasses.

## Quando utilizar?

Quando existem várias classes que possuem **características e comportamentos em comum**, mas algumas partes precisam ser implementadas de maneira diferente por cada classe.

## Exemplo

O exemplo desta seção mostra um cenário em que diferentes empresas oferecem os mesmos tipos de serviço de transporte. A aplicação precisa criar os veículos correspondentes a cada empresa, mantendo a compatibilidade entre os objetos.

Como temos diferentes famílias de objetos relacionados, podemos utilizar o Abstract Factory para centralizar a criação desses objetos.
