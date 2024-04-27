describe("Login success test", () => {
  beforeEach(() => {
    // Visit login page
    cy.visit("/");
  });

  it("login-test with valid user", () => {
    cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);
    cy.get("input#loginEmail").type(cypress.env("email"));
    cy.get("input#loginPassword").type(cypress.env("password"));
    cy.get("#loginForm").submit();
    cy.wait(500);
    cy.get('[data-auth="logout"]').should("be.visible");
    cy.wait(500);
    cy.get('[data-auth="logout"]').click();
    cy.wait(500);
    cy.get('[data-auth="login"]').should("be.visible");
  });
});
