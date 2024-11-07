///<reference types = "cypress"/> 

it('case 1  - work phone',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field allows inclusion of country codes.

    cy.get("input[id='point_of_contact.0.work_phone']").type('0807756486')
    cy.get('.bg-submit-button').click()
    });

it('case 2  - work phone',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that only valid formats trigger a pass

    cy.get("input[id='point_of_contact.0.work_phone']").type('A')
    cy.get('.bg-submit-button').click()
    });

