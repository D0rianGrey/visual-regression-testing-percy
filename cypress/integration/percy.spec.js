describe("Visual Regression with Percy and Cypress", () => {
    it("should take percy snapshot", () => {
        cy.visit("http://www.example.com");
        cy.wait(2000);
        cy.percySnapshot();
    });
});