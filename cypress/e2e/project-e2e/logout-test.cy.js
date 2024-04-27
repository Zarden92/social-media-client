describe("Logout", () => {
    beforeEach(() => {
      // Visit the login page and log in
      cy.visit("http://127.0.0.1:5500/");
      // Assuming there's a function to log in the user, let's call it here
      // cy.login(username, password);
    });
  
    it("Should log out successfully", () => {
        cy.wait(500);
    cy.get('#registerModal [data-auth="login"]').click();
    cy.wait(500);
    cy.get("input#loginEmail").type("blabla123@noroff.no");
    cy.get("input#loginPassword").type("11111111");
    cy.get("#loginForm").submit();

     // Assert that the user is logged in by checking for a logged-in state
     cy.wait(2000);
     // Assert that the user is logged in by checking for a logged-out state
    cy.get('[data-auth="logout"]').should("be.visible");
      // Log out
      cy.get('[data-auth="logout"]').click();
  
      // Wait for the login button to appear
      cy.get('[data-auth="login"]').should("be.visible");
      
      // Ensure other elements for authenticated users are not visible
      cy.get('[data-auth="logout"]').should("not.be.visible");
      cy.get('[data-auth="login"]').should("be.visible");
    });
  });
  