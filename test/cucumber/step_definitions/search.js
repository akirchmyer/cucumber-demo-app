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

	this.Given(/^The home page has loaded$/, function(callback) {
		this.assert.equal(this.browser.location.href, 'http://localhost:9001/');
		callback();
	});

	this.Then(/^the search box exists with the text "([^"]*)"$/, function(arg1, callback) {
		this.assert(this.browser.query('.search-query[placeholder="Search this site"]'));
		callback();
	});

	this.Then(/^A search button exists with the test "([^"]*)"$/, function(arg1, callback) {
		this.assert(this.browser.query('.search-button[value="Search"]'));
		callback();
	});
};

module.exports = tabbedComponentTests;
