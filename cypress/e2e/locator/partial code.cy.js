///<reference types = "cypress"/> 
//to enable auto completion//

/*beforeEach(function(
    cy.visit(/)*/
/*it('login',function(){
    cy.visit('https://morphs.in')
    cy.get('#email').type('test@gmail.com')
    cy.get('#password').type('test')
    cy.get('.text-white').click()
})*/


/*it('registration sheet',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
})


it('company name',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

    //company name
//case 1 - Verify that the field accepts standard alphanumeric company names
    cy.get('#company_name').type('Testcompany100')
    cy.get('#company_name').clear()
//case 2 - Verify that the field accepts special characters like & and - in company names
cy.get('#company_name').type('#!@#$&*()_+apla')
cy.get('#company_name').clear()
//case 3 - Verify that the field does not accept numeric-only entries if restricted
cy.get('#company_name').type(4578826841528756)
cy.get('#company_name').clear()
//case 4 - Verify that the maximum character length limit is enforced and shows error if exceeded.
cy.get('#company_name').type('hhsgdtyrbdautwebw87rtjdjoaw9TYytwsabiaushdnkskdongkjdcysafkskdpoasorionfvhvusgdfkjvnxzhjuvas.dogfgfskfisdgfskdfigjhrkbfgydfagbdfvudsgvgjdsfugasedpfhashhdesgfyaeiwrtfasdergusdugdf/mhpadhjndiahfbshdfhbdnsfjkavfifgsbn dsv gdvs sdkjbdjv')
    })*/

it('Type of Company',function(){
        cy.visit('https://morphs.in/sales/customers')
        //enter the registration sheet
        cy.get('.bg-submit-button').click()

        //case 1 - Verify that the field allows selection between 'Individual' and 'Business'
        cy.get(':nth-child(1) > .grid > :nth-child(1) > :nth-child(1) > .w-full.max-w-sm > .justify-between').click()
        //case 2 - Verify that only one option can be selected at a time.
        cy.get(':nth-child(1) > .grid > :nth-child(1) > :nth-child(1) > .w-full.max-w-sm > .justify-between').click()
        cy.get('select').select('INDIVIDUAL')
        //case 3 - Verify that an error is shown if neither option is selected 
        cy.get("button[type='submit']").click()
        cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')

        //within(() => {
            //cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > div > select').select('INDIVIDUAL')})
        
            
    })