import Ember from 'ember'

export default Ember.Component.extend({
	  classNames: ['frost-sidebar'],

	  collapsed: true,

	  actions: {
		  toggleCollapsed () {
			  this.toggleProperty('collapsed')
		}
	}
})
