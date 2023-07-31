var faker = require("faker-br");
const urlBase = "https://tinnova-teste-qa.vercel.app/"; //Cypress.env('urlBase')
const name = faker.name.findName();
const email = faker.internet.email();
const cpfSemPontuacao = faker.br.cpf();
const cpf = cpfSemPontuacao.replace(
  /(\d{3})(\d{3})(\d{3})(\d{2})/,
  "$1.$2.$3-$4"
);
const phone = faker.phone.phoneNumber("(11) 9####-####");

describe("Tinnova App", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(urlBase);
  });

  it("Entra no Sistema com sucesso", () => {
    cy.entraNoSistema();

    cy.contains("Adicionar").should("be.visible");
    cy.contains("Sair").should("be.visible");
  });

  it("Lista usuários com sucesso", () => {
    cy.entraNoSistema();

    cy.contains("Nome").should("be.visible");
    cy.contains("Telefone").should("be.visible");
    cy.contains("E-mail").should("be.visible");
    cy.contains("CPF").should("be.visible");
    cy.contains("Ações").should("be.visible");
  });

  it("Abre formulário de Adicionar novo usuário com sucesso", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="cpf"]').should("be.visible");
    cy.get('input[name="phone"]').should("be.visible");
  });

  it("Cadastra Novo usuário com Dados válidos", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.preencheFormularioCadastro(name, email, cpf, phone);

    cy.contains(name).should("be.visible");
    cy.contains(phone).should("be.visible");
    cy.contains(email).should("be.visible");
    cy.contains(cpf).should("be.visible");
  });

  it("Visualiza cadastro de Usuário", () => {
    cy.entraNoSistema();
    cy.visualizaCadastroUsuário();

    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="cpf"]').should("be.visible");
    cy.get('input[name="phone"]').should("be.visible");
    cy.contains("VOLTAR").should("be.visible");
  });

  it("Cadastra Novo usuário com Dados inválidos", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.preencheFormularioCadastro(
      "@>>@>>...",
      "emailinválido",
      "123.456.789-00",
      "(00) 00000-0000"
    );

    cy.contains("@>>@>>...").should("be.visible");
    cy.contains("emailinválido").should("be.visible");
    cy.contains("123.456.789-00").should("be.visible");
    cy.contains("(00) 00000-0000").should("be.visible");
  });

  it("Cadastra Novo usuário com Todos dados Vazios", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.contains("GUARDAR").click();

    cy.exibeEValidaAlerta();
    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="cpf"]').should("be.visible");
    cy.get('input[name="phone"]').should("be.visible");
  });

  it("Cadastra Novo usuário com Nome Vazio", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.preencheFormularioCadastro("{enter}", email, cpf, phone);
    cy.exibeEValidaAlerta();

    cy.get('input[name="name"]').should("have.value", "");
  });

  it("Cadastra Novo usuário com Email Vazio", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.preencheFormularioCadastro(name, "{enter}", cpf, phone);
    cy.exibeEValidaAlerta();

    cy.get('input[name="email"]').should("have.value", "");
  });

  it("Cadastra Novo usuário com cpf Vazio", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.preencheFormularioCadastro(name, email, "{enter}", phone);
    cy.exibeEValidaAlerta();

    cy.get('input[name="cpf"]').should("have.value", "");
  });

  it("Cadastra Novo usuário com Telefone Vazio", () => {
    cy.entraNoSistema();
    cy.abreFormularioAdicionar();
    cy.preencheFormularioCadastro(name, email, cpf, "{enter}");
    cy.exibeEValidaAlerta();

    cy.get('input[name="phone"]').should("have.value", "");
  });

  it("Atualiza cadastro de Usuário", () => {
    cy.entraNoSistema();
    cy.atualizaCadastroUsuário(name, email, cpf, phone);

    cy.contains(name).should("be.visible");
    cy.contains(phone).should("be.visible");
    cy.contains(email).should("be.visible");
    cy.contains(cpf).should("be.visible");
  });

  it("Exclui cadastro de Usuário", () => {
    cy.entraNoSistema();
    cy.excluiCadastroUsuario("Sim");

    cy.contains("Entrar").should("be.visible");
  });

  it("Cancela Exclusão de cadastro de Usuário", () => {
    cy.entraNoSistema();
    cy.excluiCadastroUsuario("Não");

    cy.contains("Adicionar").should("be.visible");
    cy.contains("Sair").should("be.visible");
  });

  it("Sai do Sistema", () => {
    cy.entraNoSistema();
    cy.saiDoSistema();
    cy.contains(
      "Boa sorte, e divirta-se no processo, isso é uma experiência. aproveite ao máximo."
    ).should("be.visible");
  });

  it("Tenta acessar pagina sem entrar", () => {
    cy.acessaFormsUrl()
    cy.get('img').should('have.length', '1').should('be.visible')
  });

});
