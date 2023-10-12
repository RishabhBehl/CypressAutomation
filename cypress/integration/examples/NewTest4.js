describe("My Fourth Test Suite", function () {
    it("My Fourth Test Case", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
      cy.get("#dropdown-class-example").select('option2')
      cy.get('#autocomplete').type('Ind')
      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text() ==='India')
        {
          $el.click()
        }
      })
      cy.get('input[value="radio1"]').check()
    });
  });
  