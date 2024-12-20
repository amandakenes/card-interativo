# Formulário de Detalhes do Cartão

Este projeto é um **formulário interativo** que permite ao usuário inserir detalhes do seu cartão de crédito, com uma **visualização em tempo real** das informações inseridas no formato de um cartão. O formulário inclui campos para o **nome do titular**, **número do cartão**, **data de validade** e **CVC**, e exibe o cartão com essas informações.

## Funcionalidades

- **Formulário de preenchimento de dados**: O formulário permite que o usuário insira as informações necessárias, como:
  - **Nome do titular**
  - **Número do cartão**
  - **Data de validade** (MM/AA)
  - **CVC**
- **Visualização do cartão**: O cartão é atualizado em tempo real conforme os dados são preenchidos, permitindo que o usuário veja como as informações aparecem no cartão.
- **Validação dos campos**: O formulário realiza validações em tempo real para garantir que as informações sejam inseridas corretamente:
  - **Nome do titular** não pode ser vazio.
  - **Número do cartão** deve ter 16 dígitos.
  - **Data de validade** deve estar no formato MM/AA.
  - **CVC** deve ter 3 dígitos.
- **Tela de confirmação**: Após o preenchimento correto, o formulário é substituído por uma tela de confirmação agradecendo o usuário e informando que os detalhes do cartão foram adicionados com sucesso.

## Tecnologias Utilizadas

- **HTML**: Estruturação e conteúdo da página.
- **CSS**: Estilo visual do formulário e do cartão, além de torná-lo responsivo.
- **JavaScript**: Manipulação da lógica de validação e atualização da interface do usuário.

## Funcionalidades Esperadas

- **Rotação do cartão**: Implementar a funcionalidade de rotação do cartão. Ao passar o mouse sobre a parte da frente do cartão, a parte de trás deve aparecer com a informação do **CVC**.

## Contribuições

Este projeto foi criado para fins educacionais. Se você quiser **contribuir** ou sugerir melhorias, fique à vontade para abrir uma **issue** ou **pull request**.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).