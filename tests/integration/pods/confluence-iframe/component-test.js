/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'confluence-iframe',
  'Integration: ConfluenceIframeComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#confluence-iframe}}
      //     template content
      //   {{/confluence-iframe}}
      // `);

      this.render(hbs`{{confluence-iframe}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
