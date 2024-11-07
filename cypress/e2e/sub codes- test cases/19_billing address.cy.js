///<reference types = "cypress"/> 

it('case 1  - billing address',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 1 - Verify that the field accepts standard alphanumeric addresses with special characters.
cy.get("textarea[name='billing_address']").type('21,baker$ street')
cy.get('.bg-submit-button').click()
});

it('case 2  - billing address',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 2 - Verify that maximum character length is enforced
cy.get("textarea[name='billing_address']").type('21,baker$ street')
cy.get('.bg-submit-button').click()
});

it('case 3  - billing address',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 3 - Verify that maximum character length is enforced
cy.get("textarea[name='billing_address']").type('')
cy.get('.bg-submit-button').click()
cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')
});