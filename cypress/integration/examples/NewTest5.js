describe("My Fifth Test Suite", function () {
  it("My Fifth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke('removeAttr','target').click()
    cy.origin("https://www.qaclickacademy.com/",function(){
    cy.get("#navbarSupportedContent a[href*='about']").click()
    cy.get(".mt-50 h2").should('contain','Welcome to QAClick Academy')
  })
    
  });
});
