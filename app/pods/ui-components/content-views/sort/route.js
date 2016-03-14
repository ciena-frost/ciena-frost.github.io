import Ember from 'ember'
import DemoRoute from './util/route'
export default DemoRoute.extend({
  breadCrumb: {
    title: 'Sort'
  },
  actions: {
    didTransition: function () {
      Ember.run.schedule('afterRender', this, function () {
        if (this.controller.get('section') != null) {
          try {
            $('html, body').animate({
              scrollTop: $('#' + this.controller.get('section')).offset().top - (0.125 * $(window).height())
            }, 200)
          } catch (err) {
            // do nothing
          }
        }
        const controller = this.controllerFor('application')
        controller.get('target').send('beautify')
      })
    }
  }
})
