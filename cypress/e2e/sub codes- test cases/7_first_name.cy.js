///<reference types = "cypress"/> 

it('case 1  - first name-field accepts alphabetic input only',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that each field accepts alphabetic input only.
cy.get("input[id='point_of_contact.0.first_name']").type('Ramesh@_')
cy.get('.bg-submit-button').click()
});

it('case 2  - first name-the fields allow hyphens and spaces within names',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that the fields allow hyphens and spaces within names
cy.get("input[id='point_of_contact.0.first_name']").type('Ramesh _')
cy.get('.bg-submit-button').click()
});

it('case 3  - first name -minimum character lengths are enforced',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that minimum and maximum character lengths are enforced
cy.get("input[id='point_of_contact.0.first_name']").type(' ')
cy.get('.bg-submit-button').click()
});

it('case 4  - first name -maximum character lengths are enforced',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 4 - Verify that maximum character lengths are enforced
cy.get("input[id='point_of_contact.0.first_name']").type('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq ')
cy.get('.bg-submit-button').click()
});

it('case 5  - first name - fields do not accept numeric characters',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 5 - Verify that fields do not accept numeric characters
cy.get("input[id='point_of_contact.0.first_name']").type(12257965854156/8*9/855458/8)
cy.get('.bg-submit-button').click()
});

it('case 6  - first name - empty field triggers an error',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 6 - Verify that an empty field triggers an error 
    cy.get("input[id='point_of_contact.0.first_name']").type('sam').clear()
    cy.get("button[type='submit']").click()
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2) > div:nth-child(1) > svg:nth-child(1)').should('be.visible')
});

