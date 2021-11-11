// "Cypress" automation testing

// In the base-folder (eg "predictive-hire-front-end-test"), in the command line terminal type: 
// 1. Run React, eg:  
    // npm start
// 2. Open Cypress program
    // .\node_modules\.bin\cypress open
// Then click on "testing_test.tx" in the UI which opens

import cypress from "cypress";

describe('First Cypress Test', () => {
    it('Displays this message', () => {
      // Got to React project page in browser
      cy.visit('http://localhost:3000');  
      // Correctly on home page
      cy.contains("Home Page");
      // Go to Login page
      cy.get("#login").click();
      // Correctly on Login page
      cy.contains("Login Page")
      // Reset fields
      cy.get("#reset").click();
      // Fields should be empty
      cy.get('#userName').should('have.value', "")
      cy.get('#password').should('have.value', "")
      // Go back to home page
      cy.get("#cancel").click();
      // Correctly on Home page
      cy.contains("Home Page");
      // Go to Login page again
      cy.get("#login").click();
      // Reset button to set fields to empty
      cy.get("#reset").click();
      // Submit button
      cy.get("#submit").click();
      // Blank error messages
      cy.contains('User Name is Required, cannot be blank');
      cy.contains('Password is Required, cannot be blank');
      // Reset fields to empty
      cy.get("#reset").click();
      // Put white space into the fields
      cy.get('#userName').type(' ');
      cy.get('#password').type(' ');
      // Submit buttoon
      cy.get("#submit").click();
      // Below minimum length errors
      cy.contains('User Name is Too Short! Minimum 1 character (when trimmed)');
      cy.contains('Password is Too Short! Minimum 1 character (when trimmed)');
      // Reset button
      cy.get("#reset").click();
      // Put long text into the fields
      cy.get('#userName').type('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
      cy.get('#password').type('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
      // Submit button
      cy.get("#submit").click();
      // Too long error message
      cy.contains('User Name is Too Long! Maximum of 50 characters');
      cy.contains('Password is Too Long! Maximum 50 characters');
      // Reset button
      cy.get("#reset").click();
      // Put Acceptable text into fields
      cy.get('#userName').type('UserName');
      cy.get('#password').type('PassWord');
      // Submit button
      cy.get("#submit").click();
      // Logged In page
      // Contains correct text - including user name displayed dynamically
      cy.contains('You are now Logged In');
      cy.contains('UserName : UserName');
    });
  });