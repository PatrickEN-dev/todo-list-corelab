# Descrição do Pull Request

## Resumo

Neste pull request, foram realizadas as seguintes ações no projeto:

## Front-end

- **Framework Escolhido**: Optei por utilizar o framework Next.js no front-end devido à sua eficiência, menor consumo de cache e rica gama de recursos incorporados. Next.js se mostrou a escolha ideal para um projeto full-stack, oferecendo eficiência e facilidade de uso.

## Back-end

- **Framework Utilizado**: No back-end, escolhi o Nest.js devido à sua base em Express, que simplifica o desenvolvimento de APIs. A utilização de classes no Nest.js facilitou a implementação de funcionalidades.

- **Banco de Dados**: Utilizei o PostgreSQL como banco de dados e aproveitei a integração fornecida pelo Prisma ORM para armazenar e acessar os dados do aplicativo.

- **Dockerização**: O projeto foi dockerizado para garantir um ambiente de desenvolvimento consistente e de fácil configuração, assegurando que o aplicativo funcione de maneira uniforme em diferentes ambientes.

- **Mono-repo**: Optei por um mono-repo para organizar eficientemente o código-fonte, permitindo o compartilhamento de recursos comuns entre o front-end e back-end, simplificando o desenvolvimento e a manutenção.

- **GitFlow**: Implementei a estratégia GitFlow para gerenciar versões e recursos de forma eficaz, mantendo o código organizado e documentado.

## Funcionalidade de Favoritar/Desfavoritar

- **Front-end**: Implementei a funcionalidade de favoritar/desfavoritar cards no front-end usando ícones que alternam entre StarEmpty e StarActivated. Isso foi feito para fornecer uma experiência de usuário intuitiva e visualmente clara.

- **Back-end**: No back-end, adicionei lógica para salvar o estado "favorito" de cada card no banco de dados, permitindo que os cards sejam automaticamente classificados nas listas de "Favoritos" e "Outros".

- **Atualização Automática**: Utilizei o hook `useEffect` para acionar uma requisição ao contexto do aplicativo para atualizar automaticamente a lista de cards e sua classificação com base no estado "favorito".

## Outras Funcionalidades Adicionais

- **Barra de Pesquisa Aprimorada**: No back-end, implementei um recurso de pesquisa avançada que permite aos usuários filtrar cards por cor, descrição, título e estado "favorito" usando consultas ORM e serviços.

- **Arquitetura Hexagonal**: O back-end foi desenvolvido seguindo a arquitetura hexagonal, o que facilita a separação de funcionalidades e manutenção de bugs em diferentes branches para uma organização mais eficiente do código.

Este conjunto de tecnologias e práticas proporciona um ambiente de desenvolvimento sólido, garantindo eficiência tanto no front-end quanto no back-end, além de facilitar a colaboração de desenvolvedores presentes e futuros.

🚀
