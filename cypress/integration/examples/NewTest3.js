describe("My Third Test Suite", function () {
    it("My Third Test Case", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
      // dynamic dropdown selection
      cy.get('[value = "radio3"]').check().should("be.checked");
      // single check box selection
       cy.get("#checkBoxOption1").check().should("have.value", "option1").and("be.checked");
      cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
  
      // multiple check box selection
      cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  
      // static dropdown selection
      cy.get("Select").select("Option1");
  
      // dynamic dropdown selection
      cy.get("#autocomplete").type("ind");
      cy.get(".ui-menu-item div").each(($el, index, $list) => {
        if ($el.text() == "India") {
          $el.click();
        }
      });
  
      // visible and invisible selection
      cy.get("#displayed-text").should("be.visible");
      cy.get("#hide-textbox").click();
      cy.get("#displayed-text").should("not.be.visible");
      cy.get("#show-textbox").click();

    });
  });
  