///<reference types = "cypress"/> 

it('case 1  - shipping address-accepts standard alphanumeric addresses',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 1 - Verify that the field accepts standard alphanumeric addresses with special characters.
cy.get("textarea[name='shipping_address']").type('21,baker$ street')
cy.get('.bg-submit-button').click()
});

it('case 2  - shipping address-maximum character length',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 2 - Verify that maximum character length is enforced
cy.get("textarea[name='shipping_address']").type('21,baker$ street')
cy.get('.bg-submit-button').click()
});

it('case 3  - shipping address-empty fields trigger errors',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 3 - Verify that empty fields trigger errors
cy.get("textarea[name='shipping_address']").type('')
cy.get('.bg-submit-button').click()
cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')
});