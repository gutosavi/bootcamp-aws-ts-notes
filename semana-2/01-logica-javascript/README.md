# Anotações teóricas sobre a semana 2

## Lógica de Programação e Estrutura de Dados com JavaScript

### Estrutura de Dados

**Pilha**

O conceito Pilha na programação é uma estrutura de dados linear que tem um comportamento que segue o princípio LIFO (Last In, First Out) que significa: **O último a entrar é o primeiro a sair**.  
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

**Fila**

O conceito Fila na programação é também uma estrutura de dados linear, porém organiza os itens seguindo o princípio FIFO (First In, First Out) que significa: **O primeiro a entrar é o primeiro a sair**.  
O funcionamento é idêntico ao de uma fila do mundo real (como em um banco ou supermercado): quem chega primeiro entra no fim da fila e é o primeiro a ser atendido na frente.

**Operações Básicas**

- **enqueue** (enfileirar)
- **dequeue** (desenfileirar)
- **peek** (espiar)

**Onde a fila é usada**

- **Sistemas de impressão**: os documentos são impressos na exata ordem em que foram enviados.
- **Requisições de servidores**: gerencimento de mensagens e dados que precisam ser processados uma por vez.
- **Fila de tarefas**: execução ordenada de processos em segundo plano, como envio de e-mails ou processamento de pagamentos.

---

**Vetores vs Listas Ligadas**

**Vetores**

Imagine uma fileira de armários numerados na escola. Quando você cria um vetor de 5 posições, o sistema operacional reserva 5 armários lado a lado, grudados um no outro.

- **Características principais**:
  - **Acesso instantâneo por índice**: Se você quer o elemento da posição 3, o computador sabe exatamente onde ele está. Isso tem complexidade _O(1)_(tempo constante).
  - **Inserção/Remoção Custa Caro**: Para inserir ou remover no começo, o computador precisa empurrar todos os elementos vizinho para o lado. Isso exige complexidade _O(n)_(tempo proporcional ao tamanho do vetor).
  - **Tamanho Fixo ou Custo de Redimensionamento**: No nível de hardware, se o bloco de memória do vetor encher e vocêq uiser adicionar mai sum item, o computador precisa criar um vetor maior em outro lugar e copiar tudo.

**Lista Ligadas (Nodes e Ponteiros Espalhados)**

Lista ligada é como se fosse um caça ao tesouro. Cada pista é um papel (um **Nó** ou _Node_) que contém um valor e traz anotado a localização da próxima pista (um **Ponteiro/Referência**).

- **Estrutura do Nó**:
  - O **Valor** (o dado armazenado)
  - O **Ponteiro**(next) (a referência de memória para o próximo _Node_)

- **Características principais**
  - **Acesso Lento**: Se você quer o 4º elemento de uma Lista Ligada, você não pode simplesmente 'pular' até ele. Você obrigagoriamente precisa começar na **Cabeça (Head)** e ir seguindo as pistas um por um. Isso tem complexidade _O(n)_.
  - **Inserção/Remoção Super Rápida**: Se você quer inserir um item no início da lista, não precisa mover ninguém! Você só cria um novo _Node_, aponta o **next** dele para o antigo **Head**, e atualiza o **Head**. Isso leva tempo constante _O(1)_.
