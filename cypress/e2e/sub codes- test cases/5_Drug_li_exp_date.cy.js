///<reference types = "cypress"/> 


it('case 1  - Drug_Li_date',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that only valid dates in the future can be selected.
cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(4) > div > div > button').click()
cy.get("div[class='p-4']").contains('15').click()
});


it('case 2 - Drug_Li_date',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
    //case 2 - Verify that an empty field triggers an error 
    cy.get("button[type='submit']").click()
    cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(4) > div > span > div > svg').should('be.visible')

});