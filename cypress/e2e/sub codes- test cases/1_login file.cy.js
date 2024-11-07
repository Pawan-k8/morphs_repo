///<reference types = "cypress"/> 
//to enable auto completion//

/*beforeEach(function(
    cy.visit(/)
))*/
//test 1// open a web page
(
    it('case 1 - mail is incorrect ',function(){
        cy.visit('https://morphs.in/')
    
      // mail is incorrect
        cy.get('#email').type('test2@gmail.com{enter}')
        cy.get('#password').type('test{enter}')
        //cy.get('.text-wcy.url().should("contain","/sales/customers")hite').click(1)
        })
    );
    
(
    it('case 2 -password is incorrect',function(){
        cy.visit('https://morphs.in/')
        // password is incorrect
        cy.get('#email').type('test@gmail.com{enter}')
        cy.get('#password').type('test1{enter}')
        cy.get('.text-white').click(1)
        })
    );

(
    it('case 3 - both are incorrect',function(){
        cy.visit('https://morphs.in/')
        // both are incorrect
        cy.get('#email').type('test2@gmail.com{enter}')
        cy.get('#password').type('test1{enter}')
        cy.get('.text-white').click()
        })
    );
        

(
    it('case 4 - both are correct',function(){
        cy.visit('https://morphs.in/')
        cy.get('#email').type('test@gmail.com{enter}')
        cy.get('#password').type('test{enter}')
        cy.get('.text-white').click()
    })
    );