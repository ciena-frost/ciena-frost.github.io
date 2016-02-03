var App = window.App = Ember.Application.extend();

App.ApiController = Ember.Controller.extend({
	queryParams: ['selectedTab'],
	selectedTab: 'description',

	actions: {
		tabSelected(tab) {
			this.set('selectedTab', tab);
		}
	}
});

export default App.ApiController;
