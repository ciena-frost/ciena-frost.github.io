import Ember from 'ember';
import layout from './template';
import Mixins from '../mixins'

export default Ember.Component.extend(Ember._ProxyMixin, Mixins.TypeSupport, Mixins.SizeSupport, {
  layout: layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['blockClass'],
  classTypePrefix: 'btn',
  clickedParam: null,
  block: null,
  attributeBindings: ['disabled', 'dismiss:data-dismiss', 'contentDismiss:data-dismiss', '_type:type', 'style'],
  _type: 'button',
  bubbles: true,
  allowedProperties: ['title', 'type', 'size', 'block', 'disabled', 'clicked', 'dismiss', 'class'],
  icon_active: void 0,
  icon_inactive: void 0,
  getPojoProperties: function(pojo) {
    if (Ember.isEmpty(pojo)) {
      return [];
    }
    return Object.keys(pojo);
  },
  getProxiedProperties: function(proxyObject) {
    var contentProperties, objectProperties, prototypeProperties;
    contentProperties = this.getObjectProperties(proxyObject.get('content'));
    prototypeProperties = Object.keys(proxyObject.constructor.prototype);
    objectProperties = this.getPojoProperties(proxyObject);
    return contentProperties.concat(prototypeProperties).concat(objectProperties).uniq();
  },
  getEmberObjectProperties: function(emberObject) {
    var objectProperties, prototypeProperties;
    prototypeProperties = Object.keys(emberObject.constructor.prototype);
    objectProperties = this.getPojoProperties(emberObject);
    return prototypeProperties.concat(objectProperties).uniq();
  },
  getEmberDataProperties: function(emberDataObject) {
    var attributes, keys;
    attributes = Ember.get(emberDataObject.constructor, 'attributes');
    keys = Ember.get(attributes, 'keys.list');
    return Ember.getProperties(emberDataObject, keys);
  },
  getObjectProperties: function(object) {
    if (object instanceof DS.Model) {
      return this.getEmberDataProperties(object);
    } else if (object instanceof Ember.ObjectProxy || Ember._ProxyMixin.detect(object)) {
      return this.getProxiedProperties(object);
    } else if (object instanceof Ember.Object) {
      return this.getEmberObjectProperties(object);
    } else {
      return this.getPojoProperties(object);
    }
  },
  init: function() {
    var me, properties;
    this._super();
    me = this;
    if ((this.get('content') != null) && Ember.typeOf(this.get('content')) === 'instance') {
      properties = this.getObjectProperties(this.get('content'));
      return this.getProperties(properties);
    } else {
      if (this.get('title') == null) {
        return this.set('title', this.get('content'));
      }
    }
  },
  blockClass: (function() {
    if (this.block) {
      return "" + this.classTypePrefix + "-block";
    } else {
      return null;
    }
  }).property('block'),
  contentDismiss: (function() {
    return this.get('content.dismiss');
  }).property('content.dismiss'),
  click: function(evt) {
    if (!this.get('bubbles')) {
      evt.stopPropagation();
    }
    return this.sendAction('clicked', this.get('clickedParam'));
  },
  loadingChanged: (function() {
    var loading;
    loading = this.get('loading') !== null ? this.get('loading') : "reset";
    if (loading !== 'reset' && Ember.isEmpty(this.get('reset'))) {
      this.set('reset', this.$().html());
    }
    this.set('disabled', true);
    this.$().html(this.get(loading));
    if (loading === 'reset') {
      this.set('disabled', false);
      return this.set('reset', null);
    }
  }).observes('loading'),
  icon: (function() {
    if (this.get('isActive')) {
      return this.get('icon_active');
    } else {
      return this.get('icon_inactive');
    }
  }).property('isActive')
});
