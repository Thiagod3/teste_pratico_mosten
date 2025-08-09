# Sistema de Votação de Filmes e Séries

Este projeto é um sistema simples e funcional que permite aos usuários votarem em uma lista de filmes ou séries, registrando votos positivos (like) e negativos (dislike). O sistema também possibilita o cadastro de novos títulos, armazena os dados localmente e exibe totais de votos tanto por item quanto no geral.

---

## Tecnologias

- React
- LocalStorage (para persistência dos dados)
- API OMDb (para popular a lista inicial de filmes e séries)

---

## Como rodar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/Thiagod3/teste_pratico_mosten
   ```

2. Entre na pasta do projeto:

   ```bash
   cd teste_pratico_mosten
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie a aplicação:

   ```bash
   npm start
   ```

A aplicação abrirá no navegador automaticamente, geralmente em `http://localhost:3000`.

---

## Sobre o aplicativo

- Ao iniciar, o site exibe uma lista inicial de filmes e séries, populada pela API OMDb.
- Você pode cadastrar novos filmes ou séries para incluir na lista.
- É possível pesquisar por qualquer título na lista para facilitar a votação.
- Cada filme/série possui dois botões para votar: **Like** (positivo) e **Dislike** (negativo).
- O sistema mantém um contador individual de likes e dislikes para cada título.
- Também há um contador geral, que soma todos os votos positivos e negativos registrados no site.
- Os dados dos filmes/séries que receberam votos são armazenados no `localStorage` para persistência e otimização de espaço (apenas os títulos votados são salvos).
- Três filtros adicionais estão disponíveis para facilitar a visualização:
  1. Mostrar todos os filmes/séries que receberam algum voto (positivo ou negativo).
  2. Mostrar apenas os filmes/séries que receberam likes (sem dislikes).
  3. Mostrar apenas os filmes/séries que receberam dislikes (sem likes).

---

## Contato

Se tiver dúvidas ou quiser sugerir melhorias, fique à vontade para abrir uma issue ou me contatar.
