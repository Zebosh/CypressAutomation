import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('the user is logged in',()=>
{
    cy.login()

})

When('the user enters {string} in to the searchbox',(keyword)=>
{

 cy.get('#searchInput').click().type(keyword)
})

When('the user chooses publication date',()=>
{
    cy.get('.sc-jRhVzh').click()
    cy.get('[data-component-locator="FilterPublicationDate"]').click()
    cy.get('[data-component-locator="FilterListItem"]:nth-child(1)').click()
    cy.get('.sc-kfGgVZ > .MuiButtonBase-root').click()
})

When('the user enters author name {string}',(authorName)=>
{

cy.get('.sc-jRhVzh').click()  
cy.get('[data-component-locator="FilterFacetAuthor"] >.sc-ekkqgF').click()
cy.get('.sc-bNQFlB>div:nth-child(1)').click()
cy.get('.sc-kfGgVZ > .MuiButtonBase-root').click()
})



Then('the user clicks to book {string}',(bookName)=>
{
    cy.get('.sc-fEUNkw').click()

})


When('the user clicks "Add to favourites" button',()=>
{
cy.get('.sc-kicAms').click()

})

Then('verify {string} is appeared in My Favourite Books section',(bookName)=>
{
  
cy.get('.sc-fMiknA').click()
cy.contains('[data-test-locator="My-Favourite-Books-Section"] > .sc-kkbgRg > .sc-hRmvpr > a > .sc-ccSCjj > .sc-dHmInP > .sc-iIHSe > .sc-fyjhYU ',bookName)


})