describe("Login attempt fail", () => {
  beforeEach(() => {
    // Visit login page
    cy.visit("/");
  });

  it("Should display error message for invalid credentials", () => {
    cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);
    cy.get("input#loginEmail").type(Cypress.env("invalidEmail"));
    cy.get("input#loginPassword").type(Cypress.env("invalidPassword"));
    cy.wait(1000);
    cy.get("#loginForm").submit();
    cy.wait(2000);
  });
});
