Feature: Search Component
	In order to search for content
	As a user
	I want a search box on the home page

	Scenario: Search component renders
		Given The home page has loaded
		Then the search box exists with the text "Search this site"
		And A search button exists with the test "Search"

	Scenario: User performs a search
		Given I have entered a search query
		When I click the search button
		Then I am taken to a search page

	Scenario: User goes back to the home page
		Given I am on the search page
		When I click the Go Back button
		Then I am taken to the home page
