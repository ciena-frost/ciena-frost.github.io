import Ember from 'ember'
export default Ember.Route.extend({
	      breadCrumb:{
		      title:'Usability Myths'
	},
	      actions: {
 		    goTo: function (id) { $('html, body').animate({scrollTop:$(id).offset().top}, 500) }}
})
