Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
    And I will sort items by '<sort>'
    Then The items should be sorted by price '<sort>'

  Examples:
    | sort                |
    | Price (low to high) |
    | Price (high to low) |
