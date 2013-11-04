var tabbedComponentTests = function () {
	this.World = require("../support/world.js").World; // overwrite default World constructor
	require("../support/hooks.js");

	this.Given(/^I have entered a search query$/, function(callback) {
		var field = this.browser.field('.search-query');
		this.browser.fill(field, "Ric Flair");
		callback();
	});

	this.When(/^I click the search button$/, function(callback) {
		this.browser.pressButton('.search-button');
		callback();
	});

	this.Then(/^I am taken to a search page$/, function(callback) {
		this.assert.equal(this.browser.location.pathname, '/search.html');
		callback();
	});

};

module.exports = tabbedComponentTests;
