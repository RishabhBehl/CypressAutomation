describe("My Second Test Suite", function () {
    it("My Second Test Case", function () {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.wait(2000);
      cy.get(".search-keyword").type("ca");
      cy.get(".products")
        .find(".product")
        .each(($el, index, $list) => {
          const textVeg = $el.find("h4.product-name").text();
          if (textVeg.includes("Cashews")) {
            $el.find("button").click();
          }
        });
      cy.get(".brand").should("have.text", "GREENKART");
      cy.get(".brand").then(function (brandElement) {
        cy.log(brandElement.text());
      });
    });
  });
  