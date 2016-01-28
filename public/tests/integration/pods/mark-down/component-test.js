/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'mark-down',
  'Integration: MarkDownComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#mark-down}}
      //     template content
      //   {{/mark-down}}
      // `);

      this.render(hbs`{{mark-down}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
