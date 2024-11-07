///<reference types = "cypress"/> 
//to enable auto completion//

/*beforeEach(function(
    cy.visit(/)
))*/
//test 1// open a web page
it('morphs',function(){
    cy.visit('https://morphs.in')

/*  // mail is incorrect
    cy.get('#email').type('test2@gmail.com{enter}')
    cy.get('#password').type('test{enter}')
    cy.get('.text-white').click(1)

    // password is incorrect
    cy.get('#email').type('test@gmail.com{enter}')
    cy.get('#password').type('test1{enter}')
    cy.get('.text-white').click(1)

    // both are incorrect
    cy.get('#email').type('test2@gmail.com{enter}')
    cy.get('#password').type('test1{enter}')
    cy.get('.text-white').click(1)*/

    cy.get('#email').type('test@gmail.com{enter}')
    cy.get('#password').type('test{enter}')
    cy.get('.text-white').click()

    cy.get('.mr-7 > .text-xs').select("This Month")
    cy.get('.mr-7 > .text-xs').select("This Quarter")
    cy.get('.mr-7 > .text-xs').select("Last Week")
    
    cy.get('.border-b-2').click()
    cy.get('.justify-start > .flex > :nth-child(2)').click()
    cy.get('.justify-start > .flex > :nth-child(3)').click()
    
    cy.get(':nth-child(1) > .items-start > .flex-col > .flex > .underline').click()
    cy.get(':nth-child(1) > .items-start > .flex-col > .flex > .text-black').click()

    cy.get('.hidden > .flex').type('customers{enter}')

    //cy.get('body > div > div > div.flex.flex-col.w-full > nav > div.hidden.sm\:flex.space-x-2.items-center > h1').click()
    cy.get('#radix-\:r1\: > .pb-4 > .pl-4 > :nth-child(1) > .ml-2').click()
    //cy.get('#radix-\:r2\: > .flex-grow').select('customers')


}
)


/*it('',function(){
    cy.url('/sales/customers')

})


    //cy.get('.bg-sidebar-hover-bg').click()




    //cy.get('.mr-7 > .text-xs').select(2)
    //cy.get('.mr-7 > .text-xs').select(3)
    //cy.get('body > div > div > div.flex.flex-col.w-full > div.flex.justify-end.items-center.mr-7.mt-3 > select').click()
    // cy.get('[data-content=""] > div').should("be.visible")
    //cy.get('#radix-\:rh\: > span.flex-grow.text-left.text-sm.font-helvetica-neue-regular.mt-1.text-black').click()
    
    //cy.get('body > div > div > div.flex.flex-col.w-full > nav > div.hidden.sm\:flex.space-x-2.items-center > h1').should("be.visible")
    
    //week selection
    //cy.select('.mr-7 > .text-xs')

    //product
  //  cy.get('.w-full > :nth-child(5) > .ml-2').click()
    //cy.get('#radix-\:r0\:').click()


    //cy.get('h3')*/
