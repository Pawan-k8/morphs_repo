///<reference types = "cypress"/> 

it('case 1  - Mobile country code',function(){
    cy.visit('https://morphs.in/sales/customers')
    //enter the registration sheet
    cy.get('.bg-submit-button').click()
//case 1 - Verify that the field accepts only numeric input
    cy.get("select[class='absolute border-r border-custom-gray-light pr-1 bg-transparent top-[9.3px] left-1 cursor-pointer items-center text-center text-sm font-helvetica-neue-regular appearance-none text-black focus:outline-none']").select('+91')
    cy.get("select[class='absolute border-r border-custom-gray-light pr-1 bg-transparent top-[9.3px] left-1 cursor-pointer items-center text-center text-sm font-helvetica-neue-regular appearance-none text-black focus:outline-none']").select('+88')
    cy.get("select[class='absolute border-r border-custom-gray-light pr-1 bg-transparent top-[9.3px] left-1 cursor-pointer items-center text-center text-sm font-helvetica-neue-regular appearance-none text-black focus:outline-none']").select('+44')
    cy.get("select[class='absolute border-r border-custom-gray-light pr-1 bg-transparent top-[9.3px] left-1 cursor-pointer items-center text-center text-sm font-helvetica-neue-regular appearance-none text-black focus:outline-none']").select('+1')
    //cy.get("input[id='point_of_contact.0.phone_number']")
//cy.get('.bg-submit-button').click()
    });