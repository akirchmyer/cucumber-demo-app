Feature: Tabbed Component
	In order to learn about javascript libraries used in the application
	As a user
	I want a list of libraries used and details about each library

	@include
	Scenario: User visits the home page
		Given the home page has loaded
		When the tabbed component renders
		Then the tabbed component has a "Bootstrap" tab
		And the tabbed component has a "jQuery" tab
		And the tabbed component has a header that says "Libraries used by this app"
		And the "Bootstrap" tab is selected

	@include
	Scenario: User wants information on jQuery
		Given the tabbed component renders
		When the user clicks on the "jQuery" tab
		Then the "jQuery" tab is selected

	Scenario: User wants information on bootstrap
		Given the tabbed component renders
		When the user clicks on the "jQuery" tab
		And the user clicks on the "Bootstrap" tab
		Then the "Bootstrap" tab is selected

	Scenario: User wants to go to official site for bootstrap
		Given the tabbed component renders
		When the user clicks on the "Bootstrap" official link
		Then the browser navigates to "http://getbootstrap.com/"

	Scenario: User wants to go to official site for jQuery
		Given the tabbed component renders
		When the user clicks on the "jQuery" tab
		And the user clicks on the "jQuery" official link
		Then the browser navigates to "http://api.jquery.com/"
