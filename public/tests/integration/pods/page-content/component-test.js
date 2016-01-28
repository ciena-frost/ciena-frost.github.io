/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'page-content',
  'Integration: PageContentComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page-content}}
      //     template content
      //   {{/page-content}}
      // `);

      this.render(hbs`{{page-content}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
