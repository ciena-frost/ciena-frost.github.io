import Ember from 'ember'
export default Ember.Route.extend({
  breadCrumb: {
    title: 'Help Button'
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      controller.set('section', null)
    }
  },
  actions: {
    didTransition: function () {
      Ember.run.schedule('afterRender', this, function () {
        if (this.controller.get('section') != null || this.controller.get('section') === '') {
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
