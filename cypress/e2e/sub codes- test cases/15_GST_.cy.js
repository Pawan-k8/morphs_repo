///<reference types = "cypress"/> 

it('case 1  - GST number',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field accepts alphanumeric GST numbers
    cy.get('#gst_no').type('ASK2000YT112')
    cy.get('.bg-submit-button').click()
    });

it('case 2 - GST number',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that invalid formats trigger an error.
    cy.get('#gst_no').type('12345678912')
    cy.get('.bg-submit-button').click()
    });

it('case 3 - GST number',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that the field accepts 15-character GST numbers if required
    cy.get('#gst_no').type('GSTER1548SFR223')
    cy.get('.bg-submit-button').click()
    });

it('case 4 - GST number',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 4 - Verify that the field does not accept special characters or spaces
    cy.get('#gst_no').type('GSTER--+48S!223')
    cy.get('.bg-submit-button').click()
    });