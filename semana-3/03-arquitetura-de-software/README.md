# Arquitetura de Software e Design de Sistemas

## Fundamentos

### System Design

- Projeto detalhado de todos os módulos e partes individuais.
- Específico e mais aprofundado.
- Foca em partes específicas e suas capacidades.
- Destaca os recursos e detalhes no nível dos componentes.
- Fornece plantas detalhadas dos componentes do sistema.

### System Architecture

- Organização e configuração de alto nível.
- Mais amplo e generalizado.
- Considera interações e a estrutura de todo o sistema.
- Foca em questões sistêmicas e relações em um nível mais alto.
- Fornece a estrutura geral e visão global do sistema.

---

## Tipos de Arquitetura

### Monolito

Um monolito (ou arquitetura monolítica) é um modelo de software em que todas as funções, regras de negócio, interfaces e conexões de um sistema vivem juntas em uma **única base de código e em um único pacote de implantação**.

### Monolito Modular

Um monólito modular é uma arquitetura de software em que a aplicação é organizada em um único bloco para implantação, mas dividida internamente em módulos independentes e bem isolados.

Ela funciona como um meio-termo entre o monólito tradicional e os microsserviços.

### Microsserviços

Microsserviços são uma abordagem de arquitetura de software que divide uma aplicação em **pequenos serviços independentes**, onde cada um executa uma função específica e se comunica por meio de APIs.

### Monolito vs. Microsserviços

- **Monolito:** um bloco único, adequado para projetos menores, equipes enxutas ou para o início de um produto.
- **Microsserviços:** o sistema é dividido em vários pequenos serviços independentes que se comunicam entre si, sendo comum em sistemas maiores e com múltiplos times.

---

## Arquitetura Serverless

Uma arquitetura **serverless** permite criar e executar aplicações sem que seja necessário gerenciar diretamente servidores ou infraestrutura física.

O provedor de nuvem cuida da infraestrutura necessária para executar o código, permitindo que o desenvolvedor se concentre na aplicação.

- Abstrai parte da infraestrutura.
- Foca no código e nas regras de negócio.
- Permite escalabilidade automática.
- O custo geralmente está relacionado ao uso dos recursos.

---

## API e API Gateway

### API

**API** (_Application Programming Interface_) é um conjunto de regras e padrões que permite que um sistema solicite dados ou serviços de outro.

> Uma API funciona como um intermediário entre diferentes sistemas.

### API Gateway

O **API Gateway** é um servidor que atua como um ponto de entrada centralizado para um conjunto de serviços ou microsserviços internos.

As requisições externas passam primeiro pelo Gateway, que pode analisar, proteger e encaminhar cada requisição para o serviço apropriado.

### Em resumo

- **API:** permite que diferentes sistemas se comuniquem.
- **API Gateway:** atua como ponto de entrada e gerenciamento dessas requisições.

---

## ACID

Conjunto de propriedades que garantem a confiabilidade das transações em sistemas de banco de dados.

- **Atomicidade:** tudo ou nada. Uma transação deve ser concluída completamente ou não deve ser aplicada.
- **Consistência:** a transação deve manter o banco de dados em um estado válido de acordo com suas regras.
- **Isolamento:** transações concorrentes não devem interferir indevidamente umas nas outras.
- **Durabilidade:** após o _commit_, os dados devem permanecer armazenados mesmo após uma falha do sistema.

---

# Padrões de Comunicação e Transações

## Padrões de Comunicação

São formas padronizadas de definir **como componentes, serviços ou sistemas trocam informações**.

- **Request/Response:** um componente faz uma requisição e aguarda uma resposta.
- **Event-Driven:** um componente publica um evento e outros componentes interessados reagem a ele.
- **Message Queue:** mensagens são colocadas em uma fila e processadas posteriormente por outro serviço.

A ideia principal é definir **quem comunica com quem, como a mensagem é enviada e como a resposta ou evento é tratado**.

### Queue — Comunicação Ponto a Ponto

- A mensagem enviada pelo produtor vai para uma fila específica e é consumida por **apenas um consumidor/worker**.
- A fila pode manter as mensagens temporariamente até que um consumidor esteja disponível.
- É utilizada para distribuir carga de trabalho e processar tarefas de forma assíncrona.

### Pub/Sub — Comunicação Um-para-Muitos

- O produtor publica uma mensagem em um **Tópico (Topic)** sem conhecer diretamente os consumidores.
- O tópico distribui a mensagem para múltiplos consumidores inscritos.
- É comum utilizar Pub/Sub junto com filas individuais para cada consumidor.

### Arquitetura Orientada a Eventos — EDA

A **Event-Driven Architecture (EDA)** é um padrão arquitetural no qual os componentes do sistema são projetados para reagir a **eventos** transmitidos por um _Event Broker_.

O objetivo é promover maior **desacoplamento** entre os serviços.

Principais características:

- Serviços reagem a eventos.
- Produtores não precisam conhecer diretamente os consumidores.
- Novos consumidores podem ser adicionados sem alterar necessariamente o produtor.
- Permite escalabilidade independente dos componentes.

---

## Padrões de Transações

Tratam de operações que precisam manter consistência, especialmente quando envolvem várias etapas ou componentes.

Um exemplo:

```text
Criar pedido
     ↓
Reservar estoque
     ↓
Registrar pagamento
     ↓
Confirmar pedido
```

Se o pagamento falhar, por exemplo, pode ser necessário desfazer ou compensar etapas anteriores.

---

# Padrões de Armazenamento de Dados

## Polyglot Persistence

**Polyglot Persistence** é a estratégia arquitetural de utilizar diferentes tecnologias de armazenamento de acordo com a necessidade de cada tipo de dado ou padrão de acesso.

Em vez de utilizar um único banco para toda a aplicação, escolhe-se a tecnologia mais adequada para cada contexto.

### Tipos de armazenamento

- **Relacional / SQL**
- **Document / NoSQL**
- **Key-Value / NoSQL**
- **Columnar / NoSQL**
- **Graph / NoSQL**
- **Object Storage**

Para definir qual tecnologia utilizar, é necessário primeiro compreender os **padrões de acesso aos dados da aplicação**.

### Vantagens

- **Desempenho:** utilizar a ferramenta adequada para cada tipo de consulta.
- **Resiliência e isolamento:** reduz o impacto de falhas em uma determinada tecnologia.
- **Escalabilidade independente:** cada base pode ser escalada conforme sua demanda.
- **Backup e Restore focados:** operações podem ser específicas para cada tecnologia.
- **Autonomia nos microsserviços:** cada serviço pode utilizar a tecnologia mais adequada.

### Desafios

- **Complexidade operacional:** aumenta a quantidade de tecnologias para gerenciar.
- **Consistência de dados:** pode exigir maior esforço para manter informações consistentes entre diferentes bases.
- **Manutenção:** diferentes tecnologias podem exigir diferentes estratégias de backup, monitoramento e recuperação.

---

# Arquitetura em Camadas

É uma forma de organizar a aplicação em **camadas com responsabilidades diferentes**, evitando que todo o código fique misturado.

```text
Presentation / Controller
          ↓
Service / Business Logic
          ↓
Repository / Data Access
          ↓
Database
```

- **Presentation:** recebe requisições e retorna respostas.
- **Service:** contém as regras de negócio.
- **Repository:** responsável pelo acesso aos dados.
- **Database:** armazenamento dos dados.

---

# MVC

É uma forma específica de separação de responsabilidades:

- **Model:** dados e regras relacionadas ao domínio.
- **View:** interface apresentada ao usuário.
- **Controller:** recebe ações/requisições e coordena o fluxo.

```text
Usuário
   ↓
Controller
 ↙       ↘
Model    View
```

---

# Clean Architecture

Leva a ideia de separação um pouco além, colocando a **regra de negócio no centro** e fazendo as partes externas dependerem dela.

```text
Framework / UI
      ↓
Application
      ↓
Domain
```

A ideia principal é:

> Quanto mais central for a regra de negócio, menos ela deve depender de detalhes externos, como banco de dados, framework ou interface.

### Resumo

- **Layered:** separa a aplicação em camadas.
- **MVC:** separa Model, View e Controller.
- **Clean Architecture:** organiza as dependências para manter o domínio independente da infraestrutura.

### Controller / Service / Repository

Por que separar a aplicação em **Controller/Routes**, **Service/Use Case** e **Repository**?

1. **Controller — "O que chegou?"**

   Responsável pela comunicação com o mundo externo.

   Exemplo:

   ```text
   POST /users
   ```

   Recebe a requisição, obtém os dados, chama o Service e devolve a resposta.

2. **Service / Use Case — "O que o sistema deve fazer?"**

   Contém as regras de negócio.

   Exemplo:

   ```text
   Recebe os dados
        ↓
   Verifica se o e-mail existe
        ↓
   Valida regras
        ↓
   Cria o usuário
   ```

3. **Repository — "Como acessar os dados?"**

   É responsável pela comunicação com o banco.

   Exemplos:

   ```text
   INSERT
   SELECT
   UPDATE
   DELETE
   ```

### Resumo

- **Controller:** recebe e responde.
- **Service:** decide e executa a regra de negócio.
- **Repository:** acessa e persiste os dados.

> O objetivo não é criar três pastas "porque a arquitetura manda". É **evitar que responsabilidades diferentes fiquem misturadas**, tornando o código mais fácil de entender, testar e modificar.

---

# Sistema Stateless vs. Stateful

## Stateless

Em um sistema **stateless**, cada requisição contém as informações necessárias para ser processada, sem depender de um estado armazenado no servidor de aplicação.

Características:

- Facilita a **escalabilidade horizontal**.
- Permite distribuir requisições entre diferentes instâncias.
- Favorece resiliência e facilidade de deployment.
- Pode utilizar componentes como Load Balancers e Auto Scaling.

## Stateful

Em um sistema **stateful**, o servidor mantém informações de estado entre as requisições.

Características:

- O servidor mantém informações relacionadas à sessão ou ao estado da aplicação.
- Pode tornar o escalamento horizontal mais complexo.
- O roteamento pode precisar considerar qual instância possui determinado estado.

### Resumo

- **Stateless:** cada requisição é independente; o servidor não precisa lembrar do cliente.
- **Stateful:** o servidor mantém estado entre requisições.

---

# Fundamentos de Comunicação

## HTTP / REST

É um modelo de comunicação **síncrono**, geralmente utilizado quando um sistema precisa fazer uma requisição e receber uma resposta.

```text
Cliente → HTTP Request → API
Cliente ← HTTP Response ← API
```

### Comunicação Síncrona

- O cliente faz a requisição e aguarda a resposta.
- A execução depende do tempo necessário para o serviço responder.
- É comum em APIs HTTP.

**REST** é um estilo arquitetural utilizado para construir APIs utilizando HTTP e seus conceitos.

Principais métodos:

- `GET` → buscar
- `POST` → criar
- `PUT/PATCH` → atualizar
- `DELETE` → remover

Exemplo:

```text
GET /users/10

→ retorna o usuário 10
```

---

## Fila — Message Queue

É um modelo de comunicação **assíncrono**.

Um sistema envia uma mensagem para uma fila e outro sistema a processa posteriormente.

```text
Sistema A → Fila → Sistema B
```

O Sistema A **não precisa esperar** o Sistema B terminar o processamento.

Exemplo:

```text
Pedido criado
     ↓
   Fila
     ↓
Serviço de envio de e-mail
```

### Comunicação Assíncrona

- O produtor envia a mensagem para uma fila, tópico ou broker.
- O processamento pode ocorrer posteriormente.
- O produtor não precisa aguardar o processamento completo.

### Vantagens

- **Resposta rápida:** o sistema pode continuar sua execução.
- **Resiliência:** mensagens podem permanecer na fila caso o consumidor esteja indisponível.
- **Desacoplamento:** permite conectar serviços sem comunicação direta.

### Desafios

- Maior complexidade de infraestrutura.
- Maior complexidade de observabilidade e rastreamento.
- Necessidade de lidar com mensagens duplicadas, falhas e reprocessamentos.

### Em resumo

- **HTTP/REST:** "Faça isso e me dê uma resposta."
- **Fila:** "Aqui está uma tarefa; processe quando puder."

---

# Padrões de Resiliência

## Circuit Breaker Pattern

O **Circuit Breaker Pattern** (_padrão disjuntor_) tem como objetivo principal **prevenir falhas em cascata** e isolar serviços problemáticos para manter a estabilidade geral do sistema.

### Estados do Circuito

O padrão possui três estados principais:

- **CLOSED:** as requisições funcionam normalmente.
- **OPEN:** após atingir um limite de falhas, o circuito interrompe novas chamadas ao serviço problemático e retorna rapidamente.
- **HALF-OPEN:** permite algumas requisições de teste para verificar se o serviço se recuperou.

```text
        falhas
CLOSED ───────→ OPEN
  ↑              │
  │              │ tempo
  │              ↓
  └──────── HALF-OPEN
       sucesso
```

### Vantagens

- Evita falhas em cascata.
- Evita esperar repetidamente por timeouts.
- Protege serviços que estão enfrentando problemas.

### Desafios

- Adiciona complexidade à aplicação ou infraestrutura.
- Requer monitoramento e configuração adequada dos limites de falha e recuperação.

---

## Retry Pattern

O **Retry Pattern** é uma estratégia utilizada para tentar executar novamente uma operação que falhou, principalmente para lidar com **erros transientes**.

### Erros Transientes

São falhas temporárias que podem desaparecer sem intervenção humana.

Exemplos:

- Oscilações de rede.
- Sobrecarga momentânea.
- Falhas temporárias de serviços.
- Problemas esporádicos de infraestrutura.

### Estratégias de Backoff

- **Intervalo Fixo:** aguarda o mesmo período entre as tentativas.
- **Backoff Exponencial:** aumenta progressivamente o tempo de espera.
- **Backoff Incremental:** aumenta o tempo de espera de forma linear.
- **Jitter:** adiciona uma variação aleatória ao intervalo para evitar que várias tentativas ocorram simultaneamente.

### Vantagens

- Pode tornar falhas temporárias transparentes para o usuário.
- É relativamente simples de implementar.
- Pode ser combinado com uma **Dead Letter Queue (DLQ)** para mensagens que continuam falhando.

### Desafios

- Pode causar um **Retry Storm** quando mal configurado.
- É necessário definir corretamente quantidade de tentativas, condições de retry e tempo de espera.

---

# Padrões de Design

## Feature Toggles / Feature Flags

> **A estudar**

---

# Padrões de Deployment

## Blue-Green Deployment

> **A estudar**

---

## Canary Release

> **A estudar**

---

# Resumo dos Conceitos

| Categoria       | Conceitos                                              |
| --------------- | ------------------------------------------------------ |
| Fundamentos     | System Design, System Architecture                     |
| Arquiteturas    | Monolito, Monolito Modular, Microsserviços, Serverless |
| Comunicação     | API, API Gateway, HTTP/REST, Queue, Pub/Sub, EDA       |
| Transações      | ACID, padrões de transação                             |
| Armazenamento   | Polyglot Persistence                                   |
| Organização     | Layered Architecture, MVC, Clean Architecture          |
| Estado          | Stateless, Stateful                                    |
| Resiliência     | Circuit Breaker, Retry                                 |
| Design Patterns | Feature Toggles / Feature Flags                        |
| Deployment      | Blue-Green, Canary Release                             |
