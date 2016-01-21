/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-sidebar',
  'Integration: FrostSidebarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-sidebar}}
      //     template content
      //   {{/frost-sidebar}}
      // `);

      this.render(hbs`{{frost-sidebar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
