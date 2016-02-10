import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      Ember.run.next(() => {
        /*eslint-disable */
        Prism.highlightAll()
        /*eslint-enable */
        $('.guide-sidebar').height($("[class='content']").height())
      })
    }
  }
})
