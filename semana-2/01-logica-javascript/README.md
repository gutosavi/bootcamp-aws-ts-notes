# Anotações teóricas sobre a semana 2

## Lógica de Programação e Estrutura de Dados com JavaScript

### Estrutura de Dados

**Pilha**

O conceito Pilha na programação é uma estrutura de dados linear que tem um comportamento que segue o princípio LIFO (Last in, First Out) que significa: **O último a entrar é o primeiro a sair**.  
Pense em uma pilha de pratos na pia: você coloca um prato em cima do outro e, na hora de lavar, pega sempre o último prato que foi colocado no topo.

**Operações Básicas** \

Uma pilha funciona essencialmente com estes comandos principais:

- **push** (empilhar)
- **pop** (desempilhar)
- **peek** (espiar)
- **isEmpty** (verificar se está vazia)

**Onde a pilha é usada**

No dia a dia da programação, seja criando algoritmos ou no funcionamento interno dos sistemas.

- **Função 'Desfazer'**: cada ação do usuário é colocada em uma pilha; ao apertar ctrl+Z, o editor remove a última ação feita.
- **Navegação de páginas**: o histórico de páginas visitadas ou de telas em aplicativo móvel usa uma pilha para voltar à tela anterior.
- **Call Stack**: quando uma função chama outra dentro do código, o JS vai 'empilhando' essas chamadas na memória para saber exatamente para onde voltar quando cada função terminar.
