/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-sidebar-menu',
  'Integration: FrostSidebarMenuComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-sidebar-menu}}
      //     template content
      //   {{/frost-sidebar-menu}}
      // `);

      this.render(hbs`{{frost-sidebar-menu}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
