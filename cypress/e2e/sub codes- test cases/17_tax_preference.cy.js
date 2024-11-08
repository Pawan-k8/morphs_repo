///<reference types = "cypress"/> 

it('case 1  - Tax preference -selecting tax preference',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the button option allows selecting tax preference
cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)').click()
cy.get('select').select('Taxable')
cy.get('select').select('Not Taxable')
cy.get('.bg-submit-button').click()
    });

it('case 2 - Tax preference - error is shown for no option',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
    //case 2 - Verify that an error is shown if neither option is selected 
    cy.get("button[type='submit']").click()
    cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')

});