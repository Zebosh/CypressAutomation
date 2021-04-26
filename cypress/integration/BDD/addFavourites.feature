Feature: Add book to favourites

@books @favourites
Scenario: User searches a book and addes it to favourites 
          Given the user is logged in
          When the user enters "Cypress" in to the searchbox
          And the user chooses publication date
          And the user enters author name "Narayanan Palani"
          And the user clicks to book "Automated Software Testing with Cypress"
          And the user clicks "Add to favourites" button
          Then verify "Automated Software Testing with Cypress" is appeared in My Favourite Books section

