/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'page-content-2',
  'Integration: PageContent2Component',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page-content-2}}
      //     template content
      //   {{/page-content-2}}
      // `);

      this.render(hbs`{{page-content-2}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
