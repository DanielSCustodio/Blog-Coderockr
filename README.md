# Blog Coderockr
![52](https://user-images.githubusercontent.com/29557187/196271029-b9e96f21-c754-452f-a5ef-85550d21015a.png)

Construção de um blog consumindo dados de uma API. Por se tratar de uma aplicação onde as alterações de conteúdo se daria de forma mínima, escolhi utilizar o Next.js por conta do gerador de páginas estáticas, sendo assim, a aplicação tem o seu desempenho melhorado, independente do número de artigos que a API possa ter.<br>
O blog conta com um formulário de contato funcional e está em produção, você pode conferir logo abaixo o deploy. Outra caraterística ineteressante se dá por conta da rolagem infinita na página home.

## Deploy
> http://coderockr-jade.vercel.app/

## Tecnologias

Front-end:
> Next.js, React, typescript, SASS

Back-end:
> Axios

Bibliotecas:
> html-react-parser:  Coverte uma string que possua tags html em códigos html.

> react-modal: Criação de modal de forma mais simplificada em aplicações React.

API:
> https://stormy-shelf-93141.herokuapp.com/


## Instalando Dependências

> Na raiz do projeto, execute o comando abaixo:
```bash
npm install
``` 

## Executando aplicação

* Para executar o projeto em modo de desenvolvimento:
>  Na raiz do projeto, execute um dos comandos abaixo:
  ```
  npm start
  ```
  ou 

  ```
  yarn start
  ```
* Build da aplicação:
> Execute a sequência de comandos abaixo:

 1º - Criando build

  ```
    yarn build
  ```
  ou
  ```
    npm run build
  ```
  2º - Executando a  aplicação em modo build
  ```
    yarn start
  ```
  ou
  ```
    npm run start
  ```
