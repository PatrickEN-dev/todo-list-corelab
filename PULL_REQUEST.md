# Projeto Todo List CoreLab

Este é o repositório do projeto Todo List CoreLab, que inclui tanto o front-end quanto o back-end.

## Resumo

Neste pull request, foram realizadas as seguintes ações no projeto:

## Front-end

- **Framework Escolhido**: Optei por utilizar o framework Next.js no front-end devido à sua eficiência, menor consumo de cache e rica gama de recursos incorporados. Next.js se mostrou a escolha ideal para um projeto full-stack, oferecendo eficiência e facilidade de uso.

- **Componentização para Maior Generalização**: No front-end, foi aplicada uma abordagem de componentização para criar três componentes genéricos:

  1. **Componente de Input Genérico**: Este componente foi projetado para fornecer uma experiência de edição intuitiva, tornando os campos de entrada de dados flexíveis e facilmente personalizáveis assim como feito no site Trello.

  2. **Componente de Textarea Genérico**: Seguindo o mesmo princípio de generalização, foi criado um componente de textarea que utiliza o React Hook Form para melhorar o desempenho e reduzir o número de renderizações de 17 para 1. Isso torna a edição de texto mais eficiente e dinâmica.

  3. **Componente Genérico de Favoritar/Desfavoritar**: Um componente genérico que permite aos usuários favoritar e desfavoritar itens de forma fácil e consistente. A componentização dessas funcionalidades simplificou o código, reduziu a duplicação e economizou recursos.

  A abordagem de componentização tornou os componentes altamente reutilizáveis e facilitou a manutenção e expansão do projeto. Além disso, ela contribuiu para a redução do número de estados e funções necessárias para manipular os dados e as interações do usuário, resultando em um código mais limpo e eficiente.

## Back-end

- **Framework Utilizado**: No back-end, escolhi o Nest.js devido à sua base em Express, que simplifica o desenvolvimento de APIs. A utilização de classes no Nest.js facilitou a implementação de funcionalidades.

- **Banco de Dados**: Utilizei o PostgreSQL como banco de dados e aproveitei a integração fornecida pelo Prisma ORM para armazenar e acessar os dados do aplicativo.

- **Dockerização**: O projeto foi dockerizado para garantir um ambiente de desenvolvimento consistente e de fácil configuração, assegurando que o aplicativo funcione de maneira uniforme em diferentes ambientes.

- **Mono-repo**: Optei por um mono-repo para organizar eficientemente o código-fonte, permitindo o compartilhamento de recursos comuns entre o front-end e back-end, simplificando o desenvolvimento e a manutenção.

- **GitFlow**: Implementei a estratégia GitFlow para gerenciar versões e recursos de forma eficaz, mantendo o código organizado e documentado.

- **Back-end**: No back-end, adicionei lógica para salvar o estado "favorito" de cada card no banco de dados, permitindo que os cards sejam automaticamente classificados nas listas de "Favoritos" e "Outros".

- **Atualização Automática**: Utilizei o hook `useEffect` para acionar uma requisição ao contexto do aplicativo para atualizar automaticamente a lista de cards e sua classificação com base no estado "favorito".

## Outras Funcionalidades Adicionais

- **Barra de Pesquisa Aprimorada**: No back-end, implementei um recurso de pesquisa avançada que permite aos usuários filtrar cards por cor, descrição, título e estado "favorito" usando consultas ORM e serviços.

- **Arquitetura Hexagonal**: O back-end foi desenvolvido seguindo a arquitetura hexagonal, o que facilita a separação de funcionalidades e manutenção de bugs em diferentes branches para uma organização mais eficiente do código.

Este conjunto de tecnologias e práticas proporciona um ambiente de desenvolvimento sólido, garantindo eficiência tanto no front-end quanto no back-end, além de facilitar a colaboração de desenvolvedores presentes e futuros.

🚀
