/// <reference types = "cypress" />
describe("My First Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // Assertions through Parent Child Chaining
    cy.get(".products").find(".product").should("have.length", 4);
    // Parent Child Chaining through an eq method
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    // Parent Child Chaining through an each method
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get("button").contains("Place Order").click();
    cy.get("Select").select("India");
    cy.get('input[type="checkbox"]').check();
    cy.get("button").click();
  });
});
