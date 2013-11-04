Feature: Search Component
	In order to search for content
	As a user
	I want a search box on the home page

	Scenario: User performs a search
		Given I have entered a search query
		When I click the search button
		Then I am taken to a search page

