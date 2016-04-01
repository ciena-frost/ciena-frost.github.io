import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      Ember.run.schedule('afterRender', this, function () {
        this.beautify()
      })
    },
    beautify: function () {
      Prism.highlightAll() //eslint-disable-line
      if (!this.get('media.isMobile')) {
        $('.guide-sidebar').height($("[class='content']").height())
      }
    }
  }
})
