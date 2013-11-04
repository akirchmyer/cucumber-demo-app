var tabbedComponentTests = function () {
	this.World = require("../support/world.js").World; // overwrite default World constructor
	require("../support/hooks.js");

	/**
	 * Test step definitions. These are loaded before Gherken tests are ran and executed when
	 * a Gherken test matches a test's regular expression
	 */
	this.Given(/^the home page has loaded$/, function(callback) {
		this.assert.equal(this.browser.text('title'), 'Cucumber demo');
		callback();
	});

	this.Then(/^the tabbed component has a "([^"]*)" tab$/, function(title, callback) {
		var elems = this.browser.queryAll('.tabbable .nav li a'),
			match = null;
		for (var i = 0, len = elems.length; i < len; i++) {
			if (title === this.browser.text(elems[i])) {
				match = true;
			}
		}
		if (!match) {
			throw 'no tabs match ' + title;
		}

		callback();
	});

	this.Then(/^the tabbed component has a header that says "([^"]*)"$/, function(title, callback) {
		this.assert.equal(this.browser.text('.tabbable h2'), title);
		callback();
	});

	this.Then(/^the "([^"]*)" tab is selected$/, function(title, callback) {
		this.assert.equal(this.browser.text('.tabbable .nav .active'), title);
		callback();
	});
	this.Given(/^the tabbed component renders$/, function(callback) {
		this.assert(this.browser.query('.tabbable .nav'));
		this.assert(this.browser.query('.tabbable .tab-content'));
		callback();
	});

	this.When(/^the user clicks on the "([^"]*)" tab$/, function(title, callback) {
		var elems = this.browser.queryAll('.tabbable .nav li a');
		for (var i = 0, len = elems.length; i < len; i++) {
			if (title === this.browser.text(elems[i])) {
				this.browser.clickLink(elems[i]);
			}
		}
		this.assert.equal(this.browser.text('.tabbable .nav .active'), title);
		callback();
	});

	this.When(/^the user clicks on the "([^"]*)" official link$/, function(title, callback) {
		this.browser.clickLink('.tab-pane.active .official');
		callback();
	});

	this.Then(/^the browser navigates to "([^"]*)"$/, function(href, callback) {
		this.assert.equal(this.browser.location.href, href);
		callback();
	});

};

module.exports = tabbedComponentTests;
