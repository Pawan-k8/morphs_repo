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


