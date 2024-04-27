describe("Login Page", () => {
  beforeEach(() => {
    // Visit login page
    cy.visit("http://127.0.0.1:5500/");
  });

  it("Go to the login modal", () => {
    // Go to login modal
    cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);
    cy.get("input#loginEmail").type("blabla123@noroff.no");
    cy.get("input#loginPassword").type("11111111");
    cy.get("#loginForm").submit();

     // Assert that the user is logged in by checking for a logged-in state
     cy.wait(500);
     // Assert that the user is logged in by checking for a logged-out state
    cy.get('[data-auth="logout"]').should("be.visible");

    // Click the logout button
    cy.wait(500);
    cy.get('[data-auth="logout"]').click();
    cy.wait(500);

    // Assert that the user is logged out by checking for a logged-out state
    cy.get('[data-auth="login"]').should("be.visible");
});
});
