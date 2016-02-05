import Ember from 'ember'
export default Ember.Route.extend({
  breadCrumb: {
    title: 'Landing Page'
  },
  actions: {
    goTo: function (id) {
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500)
    }
  }
})
