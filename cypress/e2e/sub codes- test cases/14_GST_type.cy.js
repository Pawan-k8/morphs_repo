///<reference types = "cypress"/> 

it('case 1  - GST type',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the dropdown allows selection of appropriate GST types
    cy.get("button[aria-controls='radix-:rr:']").click()
    cy.get('select').select('Registered Business - Regular')
    cy.get('.bg-submit-button').click()
    });

it('case 2  - GST type',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that an error is shown if no option is selected
    //cy.get("button[aria-controls='radix-:rr:']").click().click()
    //cy.get('select').select('Registered Business - Regular')
    cy.get('.bg-submit-button').click()
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > svg:nth-child(1)').should('be.visible')

    });