'use strict';

module.exports = {
	normalizeEntityName: function() {},

	afterInstall: function() {
		return this.addBowerPackagesToProject([
			{name: 'bourbon', target: '4.2.6'}
		]);
	}
};
