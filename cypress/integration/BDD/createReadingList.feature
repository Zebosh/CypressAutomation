Feature: Reading list
@books @readingList
Scenario: User creates a new reading list
          Given the user is logged in
          When the user enters "Javascript" in to the searchbox
          And the user clicks "in the last year"
          And the user chooses topic "Quality Assurance & Testing"
          And the user chooses first book from list
          And the user clicks add to reading list button
          And the user enters "Javascript books" list name and cliks add button
          Then verify that the "Javascript books" list is appeared in "My library" section


# Scenario: Delete reading list
# Given the user is logged in
# When the user clicks to My library
# And the user  clciks to "Javascript books" list
# And the user deletes the list
# Then verify that the "Javascript books" list is disappeared from "My library" section
