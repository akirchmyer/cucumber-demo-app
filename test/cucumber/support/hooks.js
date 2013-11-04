var hooks = function() {
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
};
module.exports = hooks;
