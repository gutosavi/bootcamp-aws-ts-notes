# 🌐 Fundamentos de HTML5, CSS3 e Estruturação Semântica

Esta pasta reúne anotações, exercícios de fixação e componentes desenvolvidos durante a etapa de fundamentos Web do bootcamp. O objetivo principal desta seção é consolidar as bases da Web, garantindo marcação semântica, boa acessibilidade, regras de estilização limpas e previsibilidade de layout, preparando o terreno para tópicos avançados como **CSS Flexbox**, **CSS Grid** e integração com bibliotecas e frameworks modernos.

---

## Principais Tópicos Abordados

### 1. **HTML5 Semântico e Acessibilidade**

- **Estrutura do Documento:** Uso correto de tags como `<!DOCTYPE html>`, `<head>`, `<meta charset="UTF-8">`, `<viewport>` e `<body>`.
- **Marcação Semântica:** Substituição do uso excessivo de `<div>` por tags orientadas ao significado:
  - `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>` e `<footer>`.
- **Formulários e Entrada de Dados:** Criação de formulários acessíveis associando `<label for="...">` com `<input id="...">`, além de validações nativas via atributos (`required`, `pattern`, `type`).
- **Acessibilidade Primária (a11y):** Uso obrigatório do atributo `alt` em imagens, estruturação hierárquica rigorosa de títulos (`<h1>` a `<h6>`) e links significativos.

### 2. **CSS3 Essencial e Fundamentos de Layout**

- **Box Model:** Anatomia e comportamento visual de cada elemento:
  - `content` $\rightarrow$ `padding` $\rightarrow$ `border` $\rightarrow$ `margin`.
- **Reset CSS e Previsibilidade:** Aplicação global de `box-sizing: border-box` para padronizar o cálculo do tamanho dos elementos.
- **Seletores e Especificidade:** Aplicação limpa de estilos usando seletores de classe (`.classe`), ID (`#id`), seletores compostos e pseudo-classes (`:hover`, `:focus`, `:first-child`).
- **Unidades de Medida:**
  - Absolutas: `px`.
  - Relativas ao contexto: `rem`, `em`, `%`, `vh` e `vw`.
- **Posicionamento de Elementos:** Entendimento de fluxo normal, `position: static`, `relative`, `absolute` e `fixed`.

---

## Padrões e Boas Práticas Adotadas

- **Separação Rígida de Responsabilidades:** HTML estritamente reservado para estrutura e conteúdo; CSS focado exclusivamente na camada de apresentação visual.
- **Nomenclatura Descritiva:** Criação de classes legíveis para facilitar a manutenção e leitura do código por outros membros da equipe.
- **Acessibilidade pelo Teclado:** Garantia de que elementos interativos (botões, links e campos de formulário) recebam estados de foco (`:focus`) visíveis.

---

## Próximas Etapas no Repositório

- [ ] **CSS Flexbox:** Alinhamentos e distribuição espacial de componentes (1D).
