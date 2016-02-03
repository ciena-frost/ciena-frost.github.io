import Ember from 'ember';
import layout from './template';
import _ from 'lodash/lodash';
import svgs from 'frost-svg/svgs';

export default Ember.Component.extend({
  tagName: '',
  layout: layout,

  // TODO This is a pretty nasty way to inline svgs - let's look into a better way
  svg: Ember.computed('path', 'class', function() {
    let svg = Ember.get(svgs, this.get('path').replace(/\//g, '.'));

    if (_.isUndefined(svg)) {
      Ember.assert('The svg ' + this.get('path') + ' does not exist');
    } else {
      let classes = _.isString(this.get('class')) ? ' ' + this.get('class') : '';
      svg = svg.replace('<svg', '<svg class="frost-svg' + classes + '"');
      return new Ember.Handlebars.SafeString(svg);
    }
  })
});
