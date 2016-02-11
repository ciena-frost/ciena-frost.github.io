import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      Ember.run.next(() => {
        /*eslint-disable */
        Prism.highlightAll()
        /*eslint-enable */
        if (!this.get('media.isMobile')){
          $('.guide-sidebar').height($("[class='content']").height())
        }
      })
    }
  }
})
