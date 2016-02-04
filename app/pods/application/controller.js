import Ember from 'ember'
import config from 'frost-guide/config/environment'

export default Ember.Controller.extend({
	//init(){
	//	this._super();
	//	window.addEventListener('popstate', function(e){
	//		let path = e.state.path;
	//		if(!path.startsWith('/frost-components')){
	//			Ember.$('.frost-scroll').scrollTop(0);
	//		}
	//	}, false);
	//},
	  routing: Ember.inject.service('-routing'),
	  applicationMenuItems: config.APP.routingConfig,
	//routeCategory: Ember.computed('routing.currentRouteName', function() {
	//	let currentRouteName = this.get('routing.currentRouteName');
	//	return _.chain(currentRouteName)
	//		.words(/[^\.]+/g) // Break the full route into individual routes around '.'
	//		.first() // Select the first route
	//		.value();
	//}),
	//versions: Ember.computed('routing.currentRouteName', function() {
	//	let currentRouteName = this.get('routing.currentRouteName');
    //
	//	// No versioning
	//	if (!currentRouteName.match(/v\d+-\d+-\d+$/)) {
	//		return [];
	//	}
    //
	//	currentRouteName = currentRouteName.substr(0, currentRouteName.length - 'vX-X-X'.length); // Drop versioning
	//	return _.chain(this.get('routing').availableRoutes())
	//		.filter(function(routeName) {
	//			if (_.contains(routeName, currentRouteName) &&
	//				!_.isEmpty(_.trim(routeName.substr(currentRouteName.length))) &&
	//				!_.endsWith(routeName, '.error') &&
	//				!_.endsWith(routeName, '.index') &&
	//				!_.endsWith(routeName, '.loading')) {
	//				return true;
	//			}
	//			return false;
	//		})
	//		.map(function(routeName) {
	//			return routeName.substr(currentRouteName.length);
	//		})
	//		.value();
	//}),
	//selectedVersion: Ember.computed('routing.currentRouteName', function() {
	//	let currentRouteName = this.get('routing.currentRouteName');
	//	if (!currentRouteName.match(/v\d+-\d+-\d+$/)) {
	//		return null;
	//	}
	//	return currentRouteName.substr(currentRouteName.length - 'vX-X-X'.length);
	//}),
    //
	//actions: {
	//	changeVersion(attrs) {
	//		let currentRouteName = this.get('routing.currentRouteName');
	//		currentRouteName = currentRouteName.substr(0, currentRouteName.length - '.vX-X-X'.length); // Drop versioning
	//		let targetRouteName = currentRouteName + '.' + attrs.value;
	//		this.transitionToRoute(targetRouteName);
	//	}
	//}
})
