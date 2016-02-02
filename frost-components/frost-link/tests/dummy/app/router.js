import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("demo", { path: '/' },  function() {
		this.route("min");
		this.route("first", {path: "/first/:first_id"}, function() {
			this.route("second", {path: "/second/:second_id"});
		});
	});
});

export default Router;
