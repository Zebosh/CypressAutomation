import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('the user is logged in',()=>
{
    cy.login()

})


When('the user enters {string} in to the searchbox',(keyword)=>{
   
    cy.get('#searchInput').click().type(keyword)
})

When('the user clicks "in the last year"',()=>{
   
    cy.get('.sc-jRhVzh').click()
    cy.get('[data-component-locator="FilterPublicationDate"]').click()
    cy.get('[data-component-locator="FilterListItem"]:nth-child(1)').click()
    cy.get('.sc-kfGgVZ > .MuiButtonBase-root').click()
})

When('the user chooses topic {string}',(topic)=>{

cy.get('.sc-jRhVzh').click() 
cy.get('[data-component-locator="FilterFacetTopic"]').click()
cy.get('#FilterSearchBarInput').type(topic)
cy.get('.sc-bNQFlB>div:nth-child(1)').click()
cy.get('.sc-kfGgVZ>button.MuiButtonBase-root').click()
})

When('the user chooses first book from list',()=>{
   
cy.get('.sc-hRmvpr>a:nth-child(2)').click()
})

When('the user clicks add to reading list button',()=>{
   
cy.get('[data-component-locator="AddToReadingList"]').click()
})

When('the user enters {string} list name and cliks add button',(newList)=>{
  cy.get('.sc-cFMgCN').click()
  cy.get('input._2sLOJdBjlUAiLhTR9zgp20 ').type(newList)
  cy.get(':nth-child(1) > .sc-cnJOrV').click()
  cy.get('.sc-fMiknA.hIpFuY').click()
  
})

Then('verify that the {string} list is appeared in "My library" section',(newList)=>{
 cy.wait(1000)  
cy.contains('.sc-bIKvTM > .sc-dNoQZL > .sc-cnTzU > .sc-eQGPmX',newList)

})


