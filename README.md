# Cadastro de Usuários Front-End
Este projeto é a interface de front-end para a aplicação de gerenciamento de usuários. Ele permite cadastrar novos usuários e listar usuários existentes através de uma interface web. Este projeto se conecta a uma API RESTful construída com Node.js, Express, Cors e Prisma, utilizando MongoDB como banco de dados.

## 🔗 Link para o Deploy: 
* Veja a versão ao vivo do projeto aqui:<a href="https://react-cad-de-usuarios.netlify.app/"> Cadastro de Usuários </a>

## Tecnologias Utilizadas
* React
* Styled Components
* Axios

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio-front.git

2. Naveque até a pasta do projeto: 
    ```sh
    cd seu-repositorio-front

3. Instale as dependências 
    ```sh
    npm install

4. Configure a URL da API no arquivo de serviços (services/api.js). 


## Uso

1. Inicie o servidor de desenvolvimento:
   ```sh
   npm start

2. O servidor estará disponível em http://localhost:3000

## Funcionalidades
### Home
* Cadastrar Usuário
* Campos: Nome, Idade, E-mail
* Ação: Envia uma requisição POST para a API para cadastrar um novo usuário.

### Listar Usuários
* Exibe a lista de usuários
* Ação: Envia uma requisição GET para a API para obter a lista de usuários.


## API Back-End
O link para o repositório do back-end pode ser encontrado  <a href="https://github.com/mleilane/API-Cadastro-De-Usuarios" > aqui </a>.

## Estrutura do Projeto
```sh
   /
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── trash.svg
│   │   └── users.png
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   └── TopBackground/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   └── ListUsers/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── main.jsx
│   ├── routes.jsx
│   └── styles/
├── .eslintc.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock


