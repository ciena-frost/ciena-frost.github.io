/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ContentControllerMixin from 'frost-guide/mixins/content-controller';

describe('ContentControllerMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var ContentControllerObject = Ember.Object.extend(ContentControllerMixin);
    var subject = ContentControllerObject.create();
    expect(subject).to.be.ok;
  });
});
