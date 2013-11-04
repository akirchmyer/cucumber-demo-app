var tabbedComponentTests = function () {
	this.World = require("../support/world.js").World; // overwrite default World constructor

	/**
	 * Test Hooks
	 * Before() will be ran before each test step and will open the app in a zombie browser
	 * After() will be ran after each test step and will close the zombie browser
	 */
	this.Before(function(callback) {
		this.visit('http://localhost:9001/', function() {
			callback();
		});
	});
	this.After(function(callback) {
		this.browser.close();
		callback();
	});

	/**
	 * Test step definitions. These are loaded before Gherken tests are ran and executed when
	 * a Gherken test matches a test's regular expression
	 */
	this.Given(/^the home page has loaded$/, function(callback) {
		if (this.browser.text('title') !== 'Cucumber demo') {
			throw 'Page title did not match "Cucumber demo"';
		}
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
		if (this.browser.text('.tabbable h2') !== title) {
			throw 'title does not match ' + title;
		}
		callback();
	});

	this.Then(/^the "([^"]*)" tab is selected$/, function(title, callback) {
		if (this.browser.text('.tabbable .nav .active') !== title) {
			throw 'active tab does not match ' + title;
		}
		    callback();
	});
	this.Given(/^the tabbed component renders$/, function(callback) {
		if (!this.browser.query('.tabbable .nav') || !this.browser.query('.tabbable .tab-content')) {
			throw 'Tab component did not properly render';
		}
		callback();
	});

	this.When(/^the user clicks on the "([^"]*)" tab$/, function(title, callback) {
		var elems = this.browser.queryAll('.tabbable .nav li a');
		for (var i = 0, len = elems.length; i < len; i++) {
			if (title === this.browser.text(elems[i])) {
				this.browser.clickLink(elems[i]);
			}
		}
		if (this.browser.text('.tabbable .nav .active') !== title) {
			throw 'clicking the ' + title + ' tab did not work';
		}
		callback();
	});

	this.When(/^the user clicks on the "([^"]*)" official link$/, function(title, callback) {
		this.browser.clickLink('.tab-pane.active .official');
		callback();
	});

	this.Then(/^the browser navigates to "([^"]*)"$/, function(href, callback) {
		if (this.browser.location.href !== href) {
			throw 'browser failed to navigate to ' + href;
		}
		callback();
	});



};

module.exports = tabbedComponentTests;
