import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
//import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('the user is logged in',()=>
{
    cy.login()

})


When('the user enters {string} in to the searchbox',(keyword)=>{
  
  cy.get('#searchInput').click().type(keyword)

})

Then('the result should contain {string} keyword',(keyword)=>{

 cy.get('p[data-test-locator="ResultsSubHeader"]').should('contain.text',keyword)

})

Then('verify that number of books is equal to {int}',(number)=>{

    cy.get('.jmDHQG > .sc-dTdPqK').should('contain.text',number)

})