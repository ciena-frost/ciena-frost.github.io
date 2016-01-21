/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'coming-soon',
  'Integration: ComingSoonComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#coming-soon}}
      //     template content
      //   {{/coming-soon}}
      // `);

      this.render(hbs`{{coming-soon}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
