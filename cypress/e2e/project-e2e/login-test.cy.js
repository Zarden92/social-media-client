describe("Login success test", () => {
  beforeEach(() => {
    // Visit login page
    cy.visit("/");
  });

  it("login-test with valid user", () => {
    cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);
    cy.get("input#loginEmail").type(Cypress.env("email"));
    cy.get("input#loginPassword").type(Cypress.env("password"));
    cy.get("#loginForm").submit();
    cy.wait(500);
    cy.get('[data-auth="logout"]').should("be.visible");
    cy.wait(500);
  });
});
