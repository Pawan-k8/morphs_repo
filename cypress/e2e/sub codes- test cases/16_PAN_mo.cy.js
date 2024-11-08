///<reference types = "cypress"/> 

it('case 1  - PAN number-field accepts alphanumeric PAN number',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field accepts alphanumeric PAN numbers
cy.get('#pan_no').type('RESTR5567H')
    cy.get('.bg-submit-button').click()
    });

it('case 2 - PAN number - invalid formats triggers error',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that invalid formats trigger an error message.
cy.get('#pan_no').type('REStR5567H')
    cy.get('.bg-submit-button').click()
    });

it('case 3 - PAN number - field has exactly 10 characters',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that the field enforces exactly 10 characters.
cy.get('#pan_no').type('RESR5567H')
    cy.get('.bg-submit-button').click()
    });

it('case 4 - PAN number - special characters are not accepted',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 4 - Verify that special characters are not accepted
cy.get('#pan_no').type('RES_R$567H')
    cy.get('.bg-submit-button').click()
    });
    