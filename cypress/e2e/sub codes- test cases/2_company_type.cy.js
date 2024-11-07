///<reference types = "cypress"/> 
it('case 1 - Type of Company',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
    //case 1 - Verify that the field allows selection between 'Individual' and 'Business'
    cy.get(':nth-child(1) > .grid > :nth-child(1) > :nth-child(1) > .w-full.max-w-sm > .justify-between').click()


});
it('case 2 - Type of Company',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
    //case 2 - Verify that only one option can be selected at a time.
    cy.get(':nth-child(1) > .grid > :nth-child(1) > :nth-child(1) > .w-full.max-w-sm > .justify-between').click()
    cy.get('select').select('INDIVIDUAL')

});
it('case 3 - Type of Company',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
    //case 3 - Verify that an error is shown if neither option is selected 
    cy.get("button[type='submit']").click()
    cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')

});
