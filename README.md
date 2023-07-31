# Tinnova
Repositório para teste de automação com Cypress para a empresa Tinnova

Foi utilizado a lib Faker-Br (Fakerjs) para geração de dados.

Para iniciar, realizar a instalação do Cypress em sua ultima versão

 - npm install cypress

Foi criado 3 scripts para rodar os testes, sendo:
Testes com resolução padrões, mobile e smoke test

    "cypress:open": "cypress open --config viewportWidth=1366,viewportHeight=768",
    "cypress:mobile" : "cypress open --config viewportWidth=375,viewportHeight=667",
    "cypress:smoke-test": "cypress run --spec cypress/e2e/AppTests.cy.js"
    
   
# Cenários de Testes

Todos os testes realizados foram baseados nos seguintes cenários:  
  Feature: Gerenciamento de Usuários

  Scenario: Entrar no Sistema com sucesso
  
    Given que o usuário está na página de login
    
    When o usuário clica no botão Entrar
    
    Then o usuário deve ser redirecionado para a página principal do Sistema
    

  Scenario: Lista usuários com sucesso
  
    Given que o usuário entrou no sistema
    
    When o usuário está na página principal do Sistema
    
    Then o Sistema deve exibir a lista de usuários cadastrados
    

  Scenario: Abre formulário de Adicionar novo usuário com sucesso
  
    Given que o usuário está na página principal do Sistema
    
    When o usuário seleciona a opção de adicionar novo usuário
    
    Then o Sistema deve exibir o formulário de adição de novo usuário
    

  Scenario: Cadastra Novo usuário com Dados válidos
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário preenche todos os campos obrigatórios com dados válidos
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de sucesso e redirecionar para a lista de usuários
    

  Scenario: Visualiza cadastro de Usuário
  
    Given que o usuário está na página principal do Sistema
    
    When o usuário seleciona a opção de visualizar um usuário específico
    
    Then o Sistema deve exibir os detalhes do usuário selecionado
    

  Scenario: Cadastra Novo usuário com Dados inválidos
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário preenche alguns campos obrigatórios com dados inválidos
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de erro e não permitir o cadastro do usuário
    

  Scenario: Cadastra Novo usuário com Todos dados Vazios
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário não preenche nenhum campo obrigatório
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de erro indicando os campos obrigatórios
    

  Scenario: Cadastra Novo usuário com Nome Vazio
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário não preenche o campo de nome
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de erro indicando que o nome é obrigatório
    

  Scenario: Cadastra Novo usuário com Email Vazio
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário não preenche o campo de email
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de erro indicando que o email é obrigatório
    

  Scenario: Cadastra Novo usuário com cpf Vazio
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário não preenche o campo de cpf
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de erro indicando que o cpf é obrigatório
    

  Scenario: Cadastra Novo usuário com Telefone Vazio
  
    Given que o usuário está no formulário de adição de novo usuário
    
    When o usuário não preenche o campo de telefone
    
    And clica no botão de cadastrar
    
    Then o Sistema deve exibir uma mensagem de erro indicando que o telefone é obrigatório
    

  Scenario: Atualiza cadastro de Usuário
  
    Given que o usuário está na página principal do Sistema
    
    When o usuário seleciona a opção de editar um usuário específico
    
    And faz as alterações necessárias
    
    And clica no botão de atualizar
    
    Then o Sistema deve exibir uma mensagem de sucesso e redirecionar para a lista de usuários atualizada
    

  Scenario: Exclui cadastro de Usuário
  
    Given que o usuário está na página principal do Sistema
    
    When o usuário seleciona a opção de excluir um usuário específico
    
    And confirma a exclusão
    
    Then o Sistema deve exibir uma mensagem de sucesso e remover o usuário da lista
    

  Scenario: Cancela Exclusão de cadastro de Usuário
  
    Given que o usuário está na página de confirmação de exclusão de um usuário
    
    When o usuário seleciona a opção de cancelar a exclusão
    
    Then o Sistema deve redirecionar de volta para a lista de usuários
    

  Scenario: Sair do Sistema
  
    Given que o usuário está logado no Sistema
    
    When o usuário seleciona a opção de logout
    
    Then o Sistema deve deslogar o usuário e redirecionar para a página de login
    

  Scenario: Tenta acessar página sem entrar
  
    Given que o usuário não está logado no Sistema
    
    When o usuário tenta acessar uma página restrita
    
    Then o Sistema deve redirecionar para a página de login
    

# Pontos de Melhoria e Bugs encontrados:

Vamos começar falando dos bugs:
    Foram encontrados 3 bugs, sendo:

    1 - App permite cadastro com dados inválidos (Nome, Email, CPF e Telefone)
    2 - App permite cadastro com dados vazios (Email, CPF e Telefone).
    3 - Na versão mobile na tela de listagem de usuários os nomes dos cabeçalhos possuem ":" diferente da versão web

Segue evidências dos Bugs:
Bug 1  - App permite cadastro com dados inválidos (Nome, Email, CPF e Telefone)

![image](https://github.com/maxalisson/Tinnova/assets/78100386/2a870d11-39b7-4044-a178-c0f5ba0de0f7)


Bug 2 - App permite cadastro com dados vazios (Email, CPF e Telefone).

![image](https://github.com/maxalisson/Tinnova/assets/78100386/2e98cfc9-029f-4009-b624-6a636e81f61b)


Bug 3 - Na versão mobile na tela de listagem de usuários os nomes dos cabeçalhos possuem ":" diferente da versão web


![image](https://github.com/maxalisson/Tinnova/assets/78100386/dccff1d8-331f-4b19-a03e-0513255ea51b)


  
 # Melhorias 
Para Melhoria, segue sugestões:

  1 - Padronização das máscaras dos campos, em alguns lugares está diferente da exibição
  
  2 - Inclementar validação campo a campo para cada tipo e formato específico (Nome, email, telefone e CPF)
  
  3 - Ao Excluir usuário não retornar para a tela de entrar (Não considerei BUG, pois não tinha a ação especificada, entrou como melhoria)
  
  4 - Criar botão voltar na tela de cadastro
  
  5 - Acrescentar camada de autenticação para Entrar no sistema (Login com usuário e senha)



# Report Execução (Os testes que falharam foram devido aos bugs mencionados acima)

![image](https://github.com/maxalisson/Tinnova/assets/78100386/d048fbdc-aaa7-40f4-a0eb-05d0b0357d9c)


![image](https://github.com/maxalisson/Tinnova/assets/78100386/3aede3ad-a61f-4097-9b00-721a34a2062e)


![image](https://github.com/maxalisson/Tinnova/assets/78100386/6f084398-342e-4f54-9610-82136a89e0df)

