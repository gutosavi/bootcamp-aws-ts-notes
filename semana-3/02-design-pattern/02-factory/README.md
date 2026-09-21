# Factory

## O que é?

Factory é um Design Pattern utilizado para **centralizar e abstrair a criação de objetos**. Em vez de criar diretamente uma instância de uma classe, delegamos essa responsabilidade para uma 'fábrica'.

## Qual problema resolve?

Evita que o código fique fortemente acoplado às classes concretas que precisam ser instanciadas.

Assim, a lógica que utiliza o objeto não precisa saber **como ou qual classe concreta deve ser criada**.

## Quando utilizar?

Quando a criação de objetos possui uma lógica ou quando existem diferetnes tipos de objetos que podem ser criados de acordo com a condição ou parâmetro.

É especialmente útil quando queremos facilitar a substituição ou expansão dos tipos de objetos criados.

## Exemplo

O exemplo do Uber implementado no diretório desta seção mostra como a responsabilidade pela criação dos objetos pode ser delegada para uma "fábrica".

Inicialmente, temos diferentes tipos de transporte, como carro e motocicleta. O problema surge quando precisamos criar esses diferentes tipos de veículos sem deixar essa lógica espalhada pelo código.

Para resolver isso, é criada a interface `IVehicle`, que define os métodos que os veículos devem implementar, como `startRoute()` e `getCargo()`.

Essa interface é implementada pelas classes `Car` e `Motorcycle`.

Depois, é criada a classe `Transport`, que centraliza a lógica de criação dos veículos e decide qual implementação concreta deve ser instanciada.

Dessa forma, o código que utiliza `Transport` não precisa conhecer diretamente as classes `Car` ou `Motorcycle`, reduzindo o acoplamento entre a criação e o uso dos objetos.
