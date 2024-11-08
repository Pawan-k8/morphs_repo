///<reference types = "cypress"/> 

it('case 1  - Mobile number -accepts only numeric input',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field accepts only numeric input
    //cy.get()
    cy.get("input[id='point_of_contact.0.phone_number']").type(4327756486)
    cy.get('.bg-submit-button').click()
    });

it('case 2  - Mobile number -an invalid length triggers an error message',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that an invalid length triggers an error message
    //cy.get()
    cy.get("input[id='point_of_contact.0.phone_number']").type('a')
    cy.get('.bg-submit-button').click()
    });
it('case 3 - Mobile number-field does not accept special characters',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that the field does not accept special characters or spaces
    //cy.get()
    cy.get("input[id='point_of_contact.0.phone_number']").type(995-15+5456)
    cy.get('.bg-submit-button').click()
    });