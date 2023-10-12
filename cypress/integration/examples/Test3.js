/// <reference types = "cypress"/>

describe ('My First Test Suite', function()
{
    it('My FirstTest Case', function()
    {
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       // cy.get('.search-keyword').type('ca')
       // cy.get('.product:visible').should('have.length',4)
       // cy.get('.products').find('.product').should('have.length',4)
       // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       // cy.get('.products').find('.product').each(($el, index, $list) => {
       //    const productName =$el.find('h4.product-name').text()
       //    if(productName.includes('Cashews'))
       //   {
       //     $el.find('button').click()
       //    }
       // })

       cy.get('.brand').then(function(logoelement)
       {
        cy.log(logoelement.text())
       })
})
})