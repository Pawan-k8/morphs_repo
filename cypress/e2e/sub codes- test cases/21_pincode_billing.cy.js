///<reference types = "cypress"/> 

it('case 1  - billing pincode -only numeric pincode format',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 1 - Verify that the field accepts only numeric pincode formats
cy.get('#billing_pincode').type(102105)
cy.get('.bg-submit-button').click()
});

it('case 2 - billing pincode -invalid formats trigger an error',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 2 - Verify that invalid formats trigger an error message
cy.get('#billing_pincode').type('AREC77')
cy.get('.bg-submit-button').click()
});

it('case 3 - billing pincode - error shows if no pincode selected',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 3 - Verify that an error shows if no pincode selected
cy.get('#billing_pincode').type('')
cy.get('.bg-submit-button').click()
cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')

});