/// <reference types = "cypress"/>

describe ('My First Test Suite', function()
{
    it('My FirstTest Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // parent child chaining 
        // cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();  
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
             if (textVeg.includes('Cashews'))
             {
$el.find('button').click();
             }
    })
})})