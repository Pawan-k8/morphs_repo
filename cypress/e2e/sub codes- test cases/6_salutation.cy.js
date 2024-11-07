///<reference types = "cypress"/> 


it('case 1  - salutations',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the dropdown allows selection from options like 'Mr.', 'Ms.', etc.
cy.get(':nth-child(1) > .grid > :nth-child(1) > :nth-child(1) > .w-full.max-w-sm > .justify-between').click()
cy.contains("button[aria-controls='radix-:ru:'] svg",'Mr')
});

it('case 2  - salutations',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that an error is shown if no option is selected
cy.get("button[type='submit']").click()


});