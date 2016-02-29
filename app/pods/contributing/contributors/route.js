import Ember from 'ember';
//import Contributors from 'frost-guide/utils/contributors'

export default Ember.Route.extend({
  model: function () {
    return $.getJSON("data/contributors.json");
  },
  breadCrumb: {
    title: 'Contributors'
  }
});
