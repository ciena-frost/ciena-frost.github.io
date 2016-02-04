import Ember from 'ember'

export default Ember.Component.extend({
	      classNames: ['guide-iframe'],

	      style: Ember.computed('margin', function () {
		      return Ember.String.htmlSafe(`margin: ${this.get('margin')}`)
	}),

	      onFrameLoad () {
	},

	      didInsertElement () {
		      this.$('iframe').attr('src', this.get('url'))
		      this.$('iframe').load(() => {
			      this.onFrameLoad()
		})
	}
})
