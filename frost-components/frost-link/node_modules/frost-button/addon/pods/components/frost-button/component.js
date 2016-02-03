import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: [
    'frost-button'
  ],
  classNameBindings: [
    'disabled'
  ],
  attributeBindings: [
    'autofocus',
    'disabled',
    'type',
    'title'
  ],

  autofocus: false,
  disabled: false,
  type: 'button',
  title: null,

  onclick: Ember.on('click', function(event) {
    if (!Ember.ViewUtils.isSimpleClick(event)) {
      return true;
    }

    if (!this.get('disabled') && _.isFunction(this.attrs['on-click'])) {
      this.attrs['on-click'](this.get('id'));
    }
  })
});
