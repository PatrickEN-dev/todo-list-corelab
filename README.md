# Todo-List Corelab 📝

O Todo-List Corelab é um aplicativo de lista de tarefas que permite aos usuários criar, gerenciar e organizar suas tarefas de forma eficiente. Este projeto foi desenvolvido com Next.js para o frontend, Nest.js para o backend e utiliza o PostgreSQL como banco de dados.

## Pré-requisitos 🛠️

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 16.15.0 ou superior)
- Yarn (ou NPM)
- Docker (opcional, para execução com Docker)

## Instalação 🚀

1. **Clone este repositório em sua máquina local:**

   ```bash
   git clone https://github.com/seu-usuario/todo-list-corelab.git
   cd todo-list-corelab
### Frontend 🌐

Navegue para a pasta do frontend:


cd frontend
Instale as dependências do frontend:


yarn install
# ou, se estiver usando NPM
npm install
### Backend ⚙️

Navegue para a pasta do backend:


cd backend
Instale as dependências do backend:

yarn install
# ou, se estiver usando NPM
npm install
## Executando o Projeto ▶️

### Com Docker (opcional) 🐳

Se você deseja executar o projeto usando Docker:

Certifique-se de que o Docker esteja instalado e em execução em sua máquina.

Na raiz do projeto, execute o seguinte comando para criar e iniciar os serviços do Docker:

docker-compose up -d
O frontend estará disponível em: http://localhost:3000.
O backend estará disponível em: http://localhost:3001.
### Sem Docker 🚫

Para executar o projeto sem Docker:

#### Frontend 🌐

Para executar o frontend, utilize o seguinte comando:

cd frontend
yarn dev
# ou, se estiver usando NPM
npm run dev
O frontend estará disponível em: http://localhost:3000.
#### Backend ⚙️

Para executar o backend em modo de desenvolvimento, utilize o seguinte comando:


cd backend
yarn start:dev
# ou, se estiver usando NPM
npm run start:dev
Para executar as migrações do Prisma para criar as tabelas do banco de dados:


yarn prisma migrate dev
# ou, se estiver usando NPM
npm run prisma migrate dev
O backend estará disponível em: http://localhost:3001.
## Contato 📧

Se você tiver alguma dúvida ou precisar de assistência com o projeto, sinta-se à vontade para entrar em contato:

Nome: Patrick de Almeida
Email: patrickandreia2505@gmail.com
