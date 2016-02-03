import Ember from 'ember';

export default Ember.Route.extend({
	/*jshint camelcase: false */
	model: function(params) {
		return this.get('store').find('link', params.first_id);
	}
});
