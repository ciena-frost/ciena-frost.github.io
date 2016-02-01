import Ember from 'ember';
export default Ember.Route.extend({
	breadCrumb:{
		title:'Labels'
	},
	actions: { 
 		 goTo:function(id){$('html, body').animate({scrollTop:$(id).offset().top},500)}}
});