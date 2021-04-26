Feature: Search a book and verify the number  of books

@search
Scenario: the user searches a book and result appears with number of books found
Given the user is logged in
When the user enters "Software testing" in to the searchbox
Then the result should contain "Software testing" keyword
And verify that number of books is equal to 641

   