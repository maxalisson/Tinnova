Cypress.Commands.add("entraNoSistema", () => {
  cy.contains("Entrar").click();
});

Cypress.Commands.add("abreFormularioAdicionar", () => {
  cy.contains("Adicionar").click();
});

Cypress.Commands.add(
  "preencheFormularioCadastro",
  (name, email, cpf, phone) => {
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('input[name="phone"]').type(phone);
    cy.contains("GUARDAR").click();
    cy.wait(2000);
  }
);

Cypress.Commands.add("visualizaCadastroUsuário", () => {
  cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"]')
    .find("svg")
    .eq(0)
    .click();
});

Cypress.Commands.add("atualizaCadastroUsuário", (name, email, cpf, phone) => {
  cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"]')
    .find("svg")
    .eq(1)
    .click();
  cy.get('input[name="name"]').clear().type(name);
  cy.get('input[name="email"]').clear().type(email);
  cy.get('input[name="cpf"]').clear().type(cpf);
  cy.get('input[name="phone"]').clear().type(phone);
  cy.contains("ATUALIZAR").click();
});

Cypress.Commands.add("excluiCadastroUsuario", (confirmacao) => {
  cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"]')
    .find("svg")
    .eq(2)
    .click();

  if (confirmacao === "Sim") {
    cy.contains("Sim").click();
  } else {
    cy.contains("Não").click();
  }
});

Cypress.Commands.add("exibeEValidaAlerta", () => {
  cy.get(".swal-modal").should("be.visible");
  cy.contains("OK").click();
});

Cypress.Commands.add("saiDoSistema", () => {
  cy.contains("Sair").click();
});

Cypress.Commands.add("acessaFormsUrl", () => {
  cy.visit("https://tinnova-teste-qa.vercel.app/form");
});
