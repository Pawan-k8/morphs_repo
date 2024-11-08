///<reference types = "cypress"/> 

it('case 1  - Email address - only valid email format',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that only valid email formats are accepted
cy.get("input[id='point_of_contact.0.email']").type('anahithagmail.do')
//cy.get('.bg-submit-button').click()
});

it('case 2  - Email address -invalid email format',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that an invalid email format triggers an error
cy.get("input[id='point_of_contact.0.email']").type('anahithagmaildo')
//cy.get('.bg-submit-button').click()
});


it('case 3  - Email address - does not accept spaces within the email address',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that the field does not accept spaces within the email address
cy.get("input[id='point_of_contact.0.email']").type('anahitha  gmaildo')
//cy.get('.bg-submit-button').click()
});

it('case 4  - Email address - the maximum character limit',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 4 - Verify that the maximum character limit for emails is enforced
cy.get("input[id='point_of_contact.0.email']").type('ananthapadhmanabha_chinnaswamy_muthuswamy_venugopala_Iyengar@gmail.com')
//cy.get('.bg-submit-button').click()
});
