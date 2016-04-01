import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      window.scrollTo(0, 0)
    }
  }
})
