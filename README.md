# JWT Authentication with Prisma and Express

Este projeto demonstra como configurar autenticação JWT em uma aplicação Node.js usando Prisma para gerenciamento de banco de dados e Express para roteamento de API.

## Features

- **Registro & Login de Usuário**: Cadastro e login seguro de usuários.
- **Autenticação JWT**: Emissão e verificação de JSON Web Tokens para gerenciar sessões de usuário.
- **Integração com Prisma**: Gerencia interações com o banco de dados de forma eficiente.

## Configuração

1. **Instalar Dependências**:
   ```bash
   npm install express prisma jsonwebtoken bcrypt
Configuração do Prisma: Inicialize o Prisma e configure a conexão com seu banco de dados.

Variáveis de Ambiente: Adicione segredos JWT e credenciais do banco de dados em um arquivo .env:

env
Copy code
DATABASE_URL="seu_database_url"
JWT_SECRET="seu_jwt_secret"
Executar Migrações:

bash
Copy code
npx prisma migrate dev
Iniciar Servidor:

bash
Copy code
npm start
Endpoints
POST /register - Registra um novo usuário.
POST /login - Autentica um usuário e retorna um JWT.
Uso
Os tokens são usados para proteger rotas, garantindo que apenas usuários autenticados possam acessar recursos específicos.

Para mais instruções detalhadas, consulte o artigo aqui.

