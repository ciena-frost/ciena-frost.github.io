import Ember from 'ember'

export default Ember.Controller.extend({
	  queryParams: ['selectedTab'],
	  selectedTab: 'description',

	  actions: {
		  tabSelected (tab) {
			  this.set('selectedTab', tab)
		}
	}
})
