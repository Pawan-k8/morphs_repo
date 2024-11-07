///<reference types = "cypress"/> 
//to enable auto completion//

/*beforeEach(function(
    cy.visit(/)
))*/
//test 1// open a web page
(
    it('login',function(){
        cy.visit('https://morphs.in/')
    
    /*  // mail is incorrect
        cy.get('#email').type('test2@gmail.com{enter}')
        cy.get('#password').type('test{enter}')
        cy.get('.text-wcy.url().should("contain","/sales/customers")hite').click(1)
    
        // password is incorrect
        cy.get('#email').type('test@gmail.com{enter}')
        cy.get('#password').type('test1{enter}')
        cy.get('.text-white').click(1)
    
        // both are incorrect
        cy.get('#email').type('test2@gmail.com{enter}')
        cy.get('#password').type('test1{enter}')
        cy.get('.text-white').click(1)*/
    
        cy.get('#email').type('test1@gmail.com{enter}')
        cy.get('#password').type('test1{enter}')
        cy.get('.text-white').click()
    })
    );
    
    
    (
    it('downloading csv ',function(){
            cy.visit('https://morphs.in/sales/customers/')    
        cy.get('.space-x-1 > :nth-child(3)').click()
        cy.get('.space-x-1 > :nth-child(2)').click()
        cy.get('body > div > div > div.flex.flex-col.w-full > main > div.grid.w-full.relative.gap-4.transition-all.duration-300.ease-in-out.grid-cols-1 > div > div.relative.w-full.overflow-auto.scrollbar-hidden > table > thead > tr > th:nth-child(1)').click()
        cy.get('.bg-submit-button').click()
        
    
    }
    )
    );
    
    
    (
        it('adding new customer ',function(){
                cy.visit('https://morphs.in/sales/customers/')    
            cy.get('.bg-submit-button').dblclick()
            //cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > div > button').click()
            cy.get('#company_name').type('testcompany')
            cy.get('#company_name').clear()
            cy.get('#license_no').type('qqqq333qq33')
            cy.get('.space-y-1 > .inline-flex').dblclick()
            //cy.get('.space-y-1 > .inline-flex > .lucide').click()
            //cy.get('[aria-controls="radix-:rua:"]').click()
            //cy.get('.date-picker-container', { timeout: 10000 }).should('be.visible')
            //cy.contains('.date', '15').click()
            //cy.get("button[aria-controls='radix-:rb:']").click().select("Individual")
            //cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > div > select').select('Individual')
            //cy.get('button[aria-controls="radix-:rb:"]').click()
            //cy.get('select[aria-hidden="true"]').first().select('INDIVIDUAL', { force: true })
            //cy.get('button[role="combobox"][aria-controls="radix-:r6:"]').should('contain', 'Individual')
            cy.get('.top-16').click()
    
            cy.get('.top-16 > .w-3').click()
    
            
    
            //cy.get('.grid > :nth-child(1) > .w-full.max-w-sm > .justify-between').find('Mr')
    
            cy.get("input[id='point_of_contact.0.first_name']").type('Tony')
    
            cy.get("input[id='point_of_contact.0.last_name']").type('stark')
    
            cy.get("input[id='point_of_contact.0.designation']").type('CEO')
    
            cy.get("input[id='point_of_contact.0.email']").type('test@email.com')
    
            cy.get("input[id='point_of_contact.0.phone_number']").type('9000090000')
    
            cy.get("input[id='point_of_contact.0.work_phone']").type('0808080808')
    
            cy.get("button[aria-controls='radix-:rr:']").dblclick()
    
            cy.get('#gst_no').type('ASK2000YT112')
    
            cy.get('#pan_no').type('RESTR5567H')
    
            cy.get(':nth-child(4) > :nth-child(1) > .w-full.max-w-sm > .justify-between > .lucide').dblclick()
    
            cy.get(':nth-child(5) > :nth-child(1) > .w-full.max-w-sm > .justify-between > .lucide').dblclick()
    
            cy.get(':nth-child(4) > .grid > :nth-child(1) > .flex-col > .bg-white').type('21, baker street')
    
            cy.get('#billing_country').type('laos')
    
            cy.get('#billing_pincode').type('001007,{ force: true }')
    
            cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(5) > div > div > div').click()
    
            cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(6) > div > div:nth-child(1) > div > textarea').type('21, baker street')
    
            cy.get('#shipping_country').type('laos')
    
            cy.get('#shipping_pincode').type('07')
    
            cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div.flex.justify-between.mt-6 > button').click()
    
            cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div.flex.justify-between.mt-6 > div > button.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.focus-visible\:outline-none.focus-visible\:ring-2.focus-visible\:ring-ring.focus-visible\:ring-offset-2.disabled\:pointer-events-none.disabled\:opacity-50.h-10.px-4.py-2.bg-submit-button.border-\[1\.2px\].border-custom-blue.shadow-\[4px_4px_10px_rgba\(184\,185\,190\,0\.3\)\,-4px_-4px_10px_rgba\(255\,255\,255\,0\.5\)\].hover\:shadow-\[inset_4px_4px_10px_rgba\(184\,185\,190\,0\.2\)\,inset_-4px_-4px_10px_rgba\(255\,255\,255\,0\.3\)\].transition-shadow.text-white').click();
    
    
            
        
        }
        )
        );
    
    
    /*
    (
    it('adding notification',function(){
        cy.visit('https://morphs.in/sales/customers/add/')
    })
    
    )*/