/// <reference types = "cypress"/>

describe ('Upfront Dev', function()
{
    it('My FirstTest Case', function()
    {
        cy.visit('https://upfrontdev4-admin.patientbondcloud.com/')
        cy.get('input[id = inputEmail3]').type('rishabh')
        cy.get('input[id = inputPassword3]').type('Rishabh@123')
        cy.get('.btn.btn-primary.btn-block.admin-login-focus-cls').click();
    } 
    )
})