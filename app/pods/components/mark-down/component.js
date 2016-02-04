import Ember from 'ember'

export default Ember.Component.extend({
  resources: {},
  isLoaded: false,
  hasFailed: false,

  didInitAttrs: function () {
    let self = this
    let file = this.get('file')
    let resources = self.get('resources')
    self.set('isLoaded', false)
    self.set('hasFailed', false)

    if (resources[file.name]) {
      self.set('isLoaded', true)
      self.set('text', resources[file.name].content)

      if (!resources[file.name].status) {
        self.set('hasFailed', true)
      }
    }
    else {
      $.get(file.path)
       .then(function (result) {
         Ember.set(resources, file.name, {
           status: true,
           content: result
         })
         self.set('text', result)
         self.set('isLoaded', true)
       })
       .fail(function (e) {
         Ember.set(resources, file.name, {
           status: false,
           content: e
         })
         self.set('text', e)
         self.set('isLoaded', true)
         self.set('hasFailed', true)
       })
    }
  }.observes('file')
})
