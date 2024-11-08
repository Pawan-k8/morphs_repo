///<reference types = "cypress"/> 
it('case 1  - company name -Verify that the field accepts standard alphanumeric company names',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field accepts standard alphanumeric company names
cy.get('#company_name').type('Testcompany100')
cy.get('.bg-submit-button').click()
});

it('case 2 - company name - Verify that the field accepts special characters like & and - in company names',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 2 - Verify that the field accepts special characters like & and - in company names
cy.get('#company_name').type('#!@#$&*()_+apla')
cy.get('.bg-submit-button').click()
});

it('case 3 - company name -Verify that the field does not accept numeric-only entries if restricted',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 3 - Verify that the field does not accept numeric-only entries if restricted
cy.get('#company_name').type(4578826841528756)
cy.get('.bg-submit-button').click()
});

it('case 4 - company name -Verify that the maximum character length limit is enforced and shows error if exceeded',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 4 - Verify that the maximum character length limit is enforced and shows error if exceeded.
cy.get('#company_name').type('hhsgdtyrbdautwebw87rtjdjoaw9TYytwsabiaushdnkskdongkjdcysafkskdpoasorionfvhvusgdfkjvnxzhjuvas.dogfgfskfisdgfskdfigjhrkbfgydfagbdfvudsgvgjdsfugasedpfhashhdesgfyaeiwrtfasdergusdugdf/mhpadhjndiahfbshdfhbdnsfjkavfifgsbn dsv gdvs sdkjbdjv')
cy.get('.bg-submit-button').click()
});

it('case 5 - company name - Verify that an error is shown if neither option is selected',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
    //case 5 - Verify that an error is shown if neither option is selected 
    cy.get("button[type='submit']").click()
    cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(2) > div > span > div > svg').should('be.visible')

});