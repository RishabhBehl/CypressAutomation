describe("My Fourth Test Suite", function () {
    it("My Fourth Test Case", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('.mouse-hover-content').invoke('show')
      cy.get("a[href*='#top']").click()
      cy.url().should('include','top')
    });
  });
  