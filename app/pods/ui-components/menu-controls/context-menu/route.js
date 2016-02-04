import Ember from 'ember'
export default Ember.Route.extend({
	      breadCrumb:{
		      title:'Context Menu'
	},
	      actions: {
 		    goTo: function (id) { $('html, body').animate({scrollTop:$(id).offset().top}, 500) }}
})
