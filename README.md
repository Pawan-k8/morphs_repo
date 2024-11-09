# Login and Customer Information Form for Automation Testing
This project provides automated test cases to validate the fields in a login page and customer information form for ensuring correct validation, and ease of use.
this project covers a wide range of fields, including personal information, Drug license details, company details, and address fields.
this project uses automated tests for the credablity code and each fields functionality aligns with specific requirement.

**#Table of Contents**

1. Project Overview
2. Features
3. Test coverage
4. Getting started
5. installation
6. running tests
7. test cases
8. summary

**#Project Overview**

This project is focused on testing each field in a customer information form, including:

Personal and Business Information: First and last name, salutation, type of company, etc.
Contact Information: Email, mobile number, and work phone.
Address Details: Billing and shipping address, including country and postal code validation.
Financial and Legal Information: PAN number, GST type and number, license number, and expiry date.

The goal is to automate the validation process to save time, reduce errors, and ensure form reliability.   

**#Features**

Automated Field Validation: Checks that each form field meets requirements, validates data type and format, and confirms required fields.

Boundary Testing: Verifies maximum and minimum character limits.

Accessibility: Validates keyboard navigation, screen reader compatibility, and focus states.

Usability Testing: Tests form interactions across desktop devices.

**#Test Coverage**

This project includes automated tests for:

Field-specific validation (e.g., length, format, character type)

Dependency-based field requirements (e.g., required fields based on company type)

Conditional behavior (e.g., auto-fill options for address fields)

Localization and internationalization for address and phone formats

**#Getting Started**

#Prerequisites

1. Node.js and npm installed (for JavaScript-based testing frameworks like Cypress)

2. Visual studio code to be installed

3. GitHub for moving the code to repository

**#Installation**

1. Install Cypress dependencies

   npm install

**#Running tests**

1. to run the automated tests in cypress

   npx cypress open

   OR
   
2. run run_test.js script in terminal

   node cypress/support/run_test.js

**#Test cases**

all the test cases are mentioned below:

1.Login test cases
mail is incorrect
password is incorrect
both are incorrect
both are correct

2. Type of Company (Individual or Business)
Verify that the field allows selection between "Individual" and "Business."
Verify that only one option can be selected at a time.
Verify that an error is shown if neither option is selected .

3. Company Name
Verify that the field accepts standard alphanumeric company names.
Verify that the field accepts special characters like "&" and "-" in company names.
Verify that the field does not accept numeric-only entries if restricted.
Verify that the maximum character length limit is enforced and shows an error if exceeded.
Verify that an error is shown if neither option is selected

4. License Number
Verify that the field accepts alphanumeric license numbers.
Verify that an empty license number triggers an error
Verify that the field enforces a minimum and maximum character length.

5. License Expiry Date
Verify that only valid future dates can be selected.
Verify that an empty field triggers an error.

6. Salutation
Verify that the dropdown allows selection from options like "Mr.," "Ms.," etc.
Verify that an error is shown if no option is selected.

7. First Name & Last Name
Verify that each field accepts alphabetic input only.
Verify that the fields allow hyphens and spaces within names.
Verify that minimum character lengths are enforced.
Verify that maximum character lengths are enforced.
Verify that fields do not accept numeric characters.
Verify that an empty field triggers an error 

8. Designation
Verify that the field accepts standard alphanumeric job titles.
Verify that the maximum character limit is enforced 

9. Email Address
Verify that only valid email formats are accepted
Verify that an invalid email format triggers an error.
Verify that the field does not accept spaces within the email address.
Verify that the maximum character limit for emails is enforced.

10. Mobile Number
Verify that the field accepts only numeric input.
Verify that an invalid length triggers an error message.
Verify that the field does not accept special characters or spaces.
subcase-Verify that the field enforces a country-specific format

11. Work Phone
Verify that the field allows inclusion of country codes.
Verify that only valid formats trigger a pass.

12. GST Type
Verify that the dropdown allows selection of appropriate GST types.
Verify that an error is shown if no option is selected

13. GST Number
Verify that the field accepts alphanumeric GST numbers.
Verify that invalid formats trigger an error.
Verify that the field accepts 15-character GST numbers
Verify that the field does not accept special characters or spaces.

14. PAN Number
Verify that the field accepts alphanumeric PAN numbers.
Verify that invalid formats trigger an error message.
Verify that the field enforces exactly 10 characters.
Verify that special characters are not accepted.

15. Taxable or Not
Verify that the botton option allows selecting tax preference.
Verify that an error is shown if no option is selected 

16. Payment Terms
Verify that the dropdown allows selection of payment terms 
Verify that an error shows if no option is selected 

17. Billing Address
Verify that the field accepts standard alphanumeric addresses with special characters.
Verify that maximum character length is enforced.
Verify that empty fields trigger errors if required.

18. Billing Country
Verify that the field accepts standard valid country
Verify that an error shows if no country is selected 

19. Billing Pincode
Verify that the field accepts only numeric pincode formats.
Verify that invalid formats trigger an error message.
Verify that an error shows if no pincode selected

20. Shipping Address
Verify that the field accepts alphanumeric addresses with special characters.
Verify that maximum character length is enforced.
Verify that the field allows copying the billing address if applicable.

21. Shipping Country
Verify that the field accepts standard valid country ,
Verify that an error shows if no country is selected .

22. Shipping Pincode
Verify that the field accepts only numeric pincode formats.
Verify that invalid formats trigger an error message.
Verify that an error shows if no pincode selected.

23. Submit Button
Verify that the button is disabled until all required fields are correctly filled.
Verify that clicking "Submit" with errors shows relevant messages for correction.
Verify that clicking "Submit" with valid data saves the information successfully.

**#Summary**

the project aims to provide a robust and individual testing framework for each parameter in the customer information form

By automating tests for each form field, it ensures data accuracy, usability, 
and compliance with business rules, helping teams quickly identify and resolve potential issues
