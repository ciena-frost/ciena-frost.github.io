/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'guide-content',
  'Integration: GuideContentComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#guide-content}}
      //     template content
      //   {{/guide-content}}
      // `);

      this.render(hbs`{{guide-content}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
