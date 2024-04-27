describe("Login Page", () => {
  beforeEach(() => {
    // Visit login page
    cy.visit("/");
  });

  it("Should display error message for invalid credentials", () => {
    // Go to login modal
    cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);

    // Fill in the login form with invalid credentials
    cy.get("input#loginEmail").type("invalidemail@noroff.no");
    cy.get("input#loginPassword").type("invalidpassword");

    // Submit the login form
    cy.get("#loginForm").submit();
  });
});
