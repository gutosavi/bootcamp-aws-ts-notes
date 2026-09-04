# Anotações teóricas sobre a semana 1

## Git e GitHub

- Git é uma ferramenta de controle de versão.
- GitHub é um local que você pode colocar seus projetos e compartilhar seus códigos com o mundo inteiro.

### Comandos mais usados

- git status
- git add .
- git commit -m "insira a mensagem aqui"
- git push
- git pull (baixa e integra as alterações do respositório remoto para o seu computador)

- git diff (diferenças em relação à versão antiga)
- git log (mostra quais foram os últimos commits)
- git shortlog (versão mais simplificada do git log)
- git show _valor hash aqui_ (fala tudo o que foi feito no commit em específico)

- git reset (se resume a "quero mover minha branch para trás/para outro commit");
  --soft - desfaz commit, mantém staging
  --mixed - desfaz commit, tira do staging, mantém arquivos
  --hard - desfaz commit e alterações dos arquivos (perigoso)
- git checkout (se resume a "quero ir para...")
