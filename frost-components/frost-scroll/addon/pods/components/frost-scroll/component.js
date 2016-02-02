import Ember from 'ember';
import _ from 'lodash/lodash';

const scrollYEndContext = {name: 'on-scroll-y-end'};
const debouncePeriod = 150;

export default Ember.Component.extend({
    classNames: ['frost-scroll'],

    initializeScroll: Ember.on('didInsertElement', function() {
        Ember.run.scheduleOnce('afterRender', this, () => {
          window.Ps.initialize(this.$()[0]);
        });

		if (_.isFunction(this.attrs['on-scroll-y-end'])) {
			this.$().on('ps-y-reach-end', () => {
				Ember.run.debounce(scrollYEndContext, this.attrs['on-scroll-y-end'], debouncePeriod, true);
			});
		}
    })
});
