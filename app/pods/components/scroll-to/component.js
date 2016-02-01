import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "p",
  click: function(evt) {
    alert(this.elementId);
  }
});
