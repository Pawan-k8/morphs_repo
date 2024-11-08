///<reference types = "cypress"/> 

it('case 1  - shipping country -accepts standard valid country',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 1 - Verify that the field accepts standard valid country.
cy.get('#shipping_country').type('London')
cy.get('.bg-submit-button').click()
});

it('case 2 - shipping country',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 2 - Verify that the field does not accepts the country if not valid.
cy.get('#shipping_country').type('whiton')
cy.get('.bg-submit-button').click()
});