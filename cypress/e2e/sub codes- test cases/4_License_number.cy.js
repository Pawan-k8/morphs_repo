///<reference types = "cypress"/> 
it('case 1  - Drug_Li_No',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field accepts alphanumeric license numbers
cy.get('#license_no').type('ASTinMA471n{enter}')
cy.get('.bg-submit-button').click()
});

it('case 2  - Drug_Li_No',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that the field enforces a minimum and maximum character length
cy.get('#license_no').type('ASTinMA471n__2@Weewtqgvdjhbgfkjnxkhcvvjnjklcxvbgxjbvxvvgxbfv5652326565bfyhdu;kl???????lxldoxhzshcyu{enter}')
cy.get('.bg-submit-button').click()
});

it('case 3  - Drug_Li_No',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that an empty license number triggers an error
cy.get('#license_no').type('')
cy.get('.bg-submit-button').click()
});