describe("Logout-test", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);
    cy.get("input#loginEmail").type(Cypress.env("email"));
    cy.get("input#loginPassword").type(Cypress.env("password"));
    cy.get("#loginForm").submit();
    cy.wait(1000);
    cy.get('[data-auth="logout"]').should("be.visible");
    cy.wait(500);
  });

  it("Should log out successfully", () => {
    cy.get('[data-auth="logout"]').should("be.visible").click();
    cy.get('[data-auth="login"]').should("be.visible");
  });
});
