import Ember from 'ember';

export default Ember.Mixin.create({
    classTypePrefix: Ember.required(String),
    classNameBindings: ['typeClass'],
    type: 'default',
    typeClass: (function() {
      var pref, type;
      type = this.get('content.type');
      if ((type == null) || typeof type === 'undefined') {
        type = this.get('type');
      }
      if (type == null) {
        type = 'default';
      }
      pref = this.get('classTypePrefix');
      return "" + pref + "-" + type;
    }).property('type', 'content.type')
  });