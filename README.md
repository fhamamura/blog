# BLOG API

Esta é uma API de um Blog desenvolvida com Node.js, Express e MongoDB.

A API permite criar, editar, deletar e procurar postagens deste blog.

Os testes são escritos com Jest e a documentação da API é gerada com o Swagger.

### Índice

-   Instalação
-   Configuração
-   Endpoints da API
-   Testes
-   Documentação Swagger
-   Estrutura de pastas
-   Tecnologia utilizada

### Instalação

1. Clone o repositório `git clone https://github.com/fhamamura/blog.git`

2. Navegue até o diretório do projeto: `cd blog`

3. Instale as dependências `npm install`

4. Inicie o servidor `npm run serve`

O servidor irá rodar em `https://localhost:3000`.

### Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```
PORT=3000
MONGO_URI="mongodb://localhost:27017/mongo"
```

-   `PORT` : Define a porta em que o servidor será executado.

-   `MONGO_URI` : String de conexão ao MongoDB.

### Endpoints da API

#### Listar todos os Posts

-   GET `/posts`

#### Obter um Post por ID

-   GET `/posts/:id`

#### Criar um Post

-   POST `/posts`

    Body:

```
{
  "title": "Título do Post",
  "content": "Conteúdo do Post",
  "author": "Autor do Post"
}
```

#### Atualizar Post

-   PUT `/posts/:id`

Body:

```
{
  "title": "Título do Post",
  "content": "Conteúdo do Post",
  "author": "Autor do Post"
}
```

#### Deletar Post

-   DELETE `/posts/:id`

### Testes

Os testes são implementados com Jest e para executar, rode o seguinte comando: `npm test --forceExit --detectOpenHandles` .

Os testes cobrem as principais funcionalidas da API, incluíndo criação, leitura, atualização e remoção de posts.

### Documentação Swagger

A documentação da API está disponível em Swagger.

Após iniciar o servidor, acesse a documentação em: `http://localhost:3000/api-docs`

Para adicionar a documentação com Swagger, foi utilizado o pacote `swagger-jsdoc` e `swagger-ui-express`.

### Estrutura de Pastas

```
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── tests
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
└── README.md
```

-   controllers: contém a lógica dos controladores da API
-   models: define os modelos do MongoDB.
-   routes: define as rotas da API.
-   tests: contém os testes automatizados com Jest.

### Tecnologias Utilizadas

-   Node.js: Plataforma para execução do Javascript no servidor.
-   Express: Framework web para Node.js.
-   MongoDB: Banco de dados NoSQL usado para persistência.
-   Jest: Framework de testes.
-   Swagger: Documentação interativa da API.

### Docker Compose

Conteinerizando a aplicação pelo comando `docker-compose up -d`.

Isto irá baixar a imagem do repositório padrão do MongoDb e Node.Js e a build da imagem da aplicação de acordo com o yaml.
