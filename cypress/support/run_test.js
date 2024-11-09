// cypress/support/run-tests.js

const cypress = require('cypress');

async function runTestsSequentially() {
const testFiles = [
    'cypress/e2e/sub codes- test cases/1_login.cy.js',
    'cypress/e2e/sub codes- test cases/2_company_type.cy.js',
    'cypress/e2e/sub codes- test cases/3_company_name.cy.js',
    'cypress/e2e/sub codes- test cases/4_License_number.cy.js',
    'cypress/e2e/sub codes- test cases/5_Drug_li_exp_date.cy.js',
    'cypress/e2e/sub codes- test cases/6_salutation.cy.js',
    'cypress/e2e/sub codes- test cases/7_first_name.cy.js',
    'cypress/e2e/sub codes- test cases/8_last_name.cy.js',
    'cypress/e2e/sub codes- test cases/9_designation.cy.js',
    'cypress/e2e/sub codes- test cases/10_Email.cy.js',
    'cypress/e2e/sub codes- test cases/11_mobile_number._countrycode.cy.js',
    'cypress/e2e/sub codes- test cases/12_mobile_number.cy.js',
    'cypress/e2e/sub codes- test cases/13_work_phone.cy.js',
    'cypress/e2e/sub codes- test cases/14_GST_type.cy.js',
    'cypress/e2e/sub codes- test cases/15_GST_.cy.js',
    'cypress/e2e/sub codes- test cases/16_PAN_mo.cy.js',
    'cypress/e2e/sub codes- test cases/17_tax_preference.cy.js',
    'cypress/e2e/sub codes- test cases/18_payment_terms.cy.js',
    'cypress/e2e/sub codes- test cases/19_billing address.cy.js',
    'cypress/e2e/sub codes- test cases/20_billing_country.cy.js',
    'cypress/e2e/sub codes- test cases/21_pincode_billing.cy.js',
    'cypress/e2e/sub codes- test cases/22_Shipping_address.cy.js',
    'cypress/e2e/sub codes- test cases/23_shipping_country.cy.js',
    'cypress/e2e/sub codes- test cases/24_shipping_pincode.cy.js',
    'cypress/e2e/sub codes- test cases/25_submit_button.cy.js'
];

for (const file of testFiles) {
    console.log(`Running test: ${file}`);
    await cypress.run({
    spec: file,
    });
}
}

runTestsSequentially();
