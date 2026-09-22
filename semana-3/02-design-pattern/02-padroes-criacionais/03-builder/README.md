# Builder factory

## O que é?

É um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.

## Qual problema resolve?

Evita construtores com muitos parâmetros ou combinações difíceis de entender, tornando a criação de objetos mais organizada e legível.

## Quando utilizar?

Quando um objeto possui muitos atributos, opções ou etapas de configuração, especialmente quando nem todos os atributos são obrigatórios.

## Exemplo

O exemplo da fábrica de carros mostra como o Builder pode ser utilizado para construir diferentes configurações de um mesmo tipo de objeto. O Director define o tipo de veículo e suas características, enquanto o Builder é responsável por executar as etapas de construção e montar o objeto final.

Dessa forma, podemos criar diferentes tipos de carros sem concentrar toda a lógica de construção em um único construtor.
