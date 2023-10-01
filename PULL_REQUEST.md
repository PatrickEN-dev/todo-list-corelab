# Descrição do Pull Request

## Resumo

Neste pull request, realizei as seguintes ações:

- Criei o projeto frontend utilizando o framework Next.js.
- Utilizei o framework Nest.js para o desenvolvimento do backend.
- Escolhi Next.js devido à sua estrutura eficiente, menor consumo de cache e a presença de muitos recursos incorporados.
- Optei pelo Nest.js por ser baseado em Express, tornando o desenvolvimento mais simples.
- A utilização de classes no Nest.js facilita a implementação de funcionalidades.
- Utilizei o banco de dados PostgreSQL para armazenar os dados do aplicativo, aproveitando a integração fornecida pelo Prisma ORM.
- Dockerizei o projeto para garantir um ambiente de desenvolvimento consistente e fácil de configurar.
- Optei por um mono-repo para organizar o código-fonte de maneira eficiente e compartilhar recursos comuns.
- Implementei a estratégia GitFlow para um gerenciamento eficaz de versões e recursos.

## Detalhes

Para o desenvolvimento deste projeto, escolhi o Next.js para o frontend devido à sua estrutura avançada, que reduz o consumo de cache e oferece uma ampla gama de recursos incorporados. Acredito que o Next.js seja a escolha ideal para projetos full-stack, pois é um framework que oferece grande eficiência e facilidade de uso.

Quanto ao backend, optei pelo Nest.js por ser baseado em Express, o que simplifica o desenvolvimento de APIs. Além disso, o Nest.js utiliza classes, o que torna a criação de endpoints e o desenvolvimento de CRUDs muito mais intuitivos, especialmente se você já tem experiência com esses dois frameworks.

A escolha do Prisma ORM se deve à sua integração suave com o PostgreSQL, o que facilita a criação de consultas e operações no banco de dados. Além disso, o Prisma oferece uma maneira eficiente e segura de interagir com o banco de dados, tornando o desenvolvimento mais produtivo.

Dockerizei o projeto para garantir que todos os desenvolvedores tenham um ambiente de desenvolvimento consistente. Isso evita problemas de configuração e assegura que o aplicativo funcione da mesma forma em diferentes ambientes, desde o desenvolvimento local até a produção.

A escolha de um mono-repo permite uma organização mais eficiente do código-fonte. Compartilhar recursos comuns entre o frontend e o backend se torna mais fácil, o que simplifica o desenvolvimento e a manutenção do projeto. Além disso, mesmo que você seja o único desenvolvedor atualmente, a estrutura do mono-repo facilita a integração de desenvolvedores futuros.

A estratégia GitFlow foi implementada para gerenciar versões e recursos de maneira eficaz. Mesmo em um ambiente de desenvolvimento solo, o GitFlow simplifica o controle de versões, a implementação de novos recursos e a correção de problemas. É uma prática que ajuda a manter o código organizado e a documentar as mudanças de forma clara.

Esta combinação de tecnologias e práticas proporciona um ambiente de desenvolvimento sólido para o projeto, garantindo eficiência tanto no frontend quanto no backend e facilitando a colaboração de desenvolvedores presentes e futuros.
