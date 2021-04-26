// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//Cypress.Commands.add('getSessionStorage', (key) => {
  
// Login Function
    Cypress.Commands.add('login', () => {
        cy.visit(Cypress.env('url'))
    
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
          })
        cy.get('[data-test-locator="LandingPageHeader-LoginLink"] > .sc-fMiknA > a').click()
        cy.fixture('userCredentials').then((user)=>{
          
        cy.get('input[autocomplete="username"]').type(user.email)
        cy.get('.sc-ESoVU > .MuiButtonBase-root > .MuiButton-label').click()

        cy.get('input[name="password"]').type(user.password)
        cy.get('.sc-ESoVU > .MuiButtonBase-root > .MuiButton-label').click()
       
        })



        // cy.get('input[autocomplete="username"]').type('znarimanova11@gmail.com')

        // cy.get('.sc-ESoVU > .MuiButtonBase-root > .MuiButton-label').click()

        // cy.get('input[name="password"]').type('2115033Muzaffar')
        // cy.get('.sc-ESoVU > .MuiButtonBase-root > .MuiButton-label').click()
      })

      // Search Function 

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
