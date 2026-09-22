# Adapter

## O que é?

Adapter é um Design Pattern que permite que **interfaces incompatíveis trabalhem juntas**, funcionando como um intermediário entre elas.

## Qual problema resolve?

Evita a necessidade de alterar classes existentes quando suas interfaces não são compatíveis com o código que precisa utilizá-las.

## Quando utilizar?

Quando precisamos **integrar uma classe ou serviço existente** que possui uma interface diferente da esperada pela aplicação.

## Exemplo

O exemplo mostra a integração de diferentes empresas de pagamento, como **PayPal** e **Payoneer**, que possuem interfaces e métodos diferentes para realizar suas operações.

Utilizando o **Adapter**, criamos uma camada intermediária que adapta a interface de cada empresa para o padrão esperado pela aplicação, permitindo que diferentes serviços de pagamento sejam utilizados de forma consistente.
