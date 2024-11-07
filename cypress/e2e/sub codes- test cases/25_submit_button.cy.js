///<reference types = "cypress"/> 

it('case 1  - Submit button',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 1 - Verify that the button is disabled until all required fields are correctly filled
cy.get('.bg-submit-button').click()
});

it('case 2 - Submit button',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 2 - Verify that clicking 'Submit' with errors shows relevant messages for correction.
cy.get('.bg-submit-button').click()
cy.get('body > div > div > div.flex.flex-col.w-full > main > div > div.text-card-foreground.w-full.max-w-4xl.mx-auto.bg-form.border-2.border-white.shadow-md.rounded-xl.overflow-hidden > form > div:nth-child(1) > div > div:nth-child(1) > div > span > div > svg').should('be.visible')

});

it('case 3  - Submit button',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()

//case 3 - Verify that clicking 'Submit' with valid data saves the information successfully.

cy.get('#company_name').type('testcompany')
cy.get('#license_no').type('qqqq333qq33')
cy.get('.space-y-1 > .inline-flex').dblclick()
cy.get('.top-16').click()
cy.get('.top-16 > .w-3').click()
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
cy.get('.bg-submit-button').click()
});
