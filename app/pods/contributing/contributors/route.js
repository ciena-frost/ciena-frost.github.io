import Ember from 'ember'

export default Ember.Route.extend({
  model: function () {
    return $.getJSON('data/contributors.json')
  },
  breadCrumb: {
    title: 'Contributors'
  }
})
