/* jshint expr:true */
import { expect } from 'chai';
import {
	describeComponent,
	it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
	'frost-svg',
	'Integration: FrostSvgComponent',
	{
		integration: true
	},

	function() {
		it('renders', function() {
			// Set any properties with this.set('myProperty', 'value');
			// Handle any actions with this.on('myAction', function(val) { ... });
			// Template block usage:
			// this.render(hbs`
			//   {{#frost-svg}}
			//     template content
			//   {{/frost-svg}}
			// `);

			this.render(hbs`
				{{frost-svg path='frost/launcher'}}
			`);

			expect(this.$()).to.have.length(1);
		});
	}
);
