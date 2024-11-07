///<reference types = "cypress"/> 

it('case 1  - designation',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that each field accepts alphabetic input only.
cy.get("input[id='point_of_contact.0.designation']").type('chairman of the group')
cy.get('.bg-submit-button').click()
});

it('case 2  - designation',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that the maximum character limit is enforced.
cy.get("input[id='point_of_contact.0.designation']").type('chairman of the group that happened to employee 10000 workers in the workshop with 1500 supervisors 800 engineers 180 assistant managers 35 general managers 20 regional managers 8 presidents 1 CFO 1 COO with a MD and 1 CEO')
cy.get('.bg-submit-button').click()
});
