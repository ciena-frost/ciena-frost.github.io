import Ember from 'ember';
import svgs from 'frost-svg/svgs';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
	entries: Ember.computed(function() {
		return _.keys(svgs).reduce((entries, category) => {
			return _.union(entries, _.keys(svgs[category]).map((entry) => {
				return category + '/' + entry;
			}));
		}, []);
	}),
	actions: {
		tabSelected(tab) {
			this.set('selectedTab', tab);
		}
	}
});
