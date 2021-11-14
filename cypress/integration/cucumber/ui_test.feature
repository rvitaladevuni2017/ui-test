@commtest
Feature: Verify successful loading of pages in Comm Bank website  

    #This scenario will run for desktop displays 
    Scenario Outline: Verifying successful page load on desktop with different viewports
        Given I am on the comm bank home "<page>"
        And I verify all tabs on home page
        When I verify all tabs are loaded successfully

        Examples:
        |page      |
        |macbook-11|
        |macbook-13|
        |macbook-15|
        |macbook-16|

