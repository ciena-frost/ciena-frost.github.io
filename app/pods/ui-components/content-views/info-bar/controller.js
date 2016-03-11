import ApiController from 'frost-guide/utils/ApiController'
import Ember from 'ember'

export default ApiController.extend({
  notifier: Ember.inject.service('notifier'),
  actions: {
    createUser () {
      this.get('notifier').addNotification({
        message: 'You clicked a button!',
        type: 'success',
        autoClear: true,
        clearDuration: '1500'
      })
    }
  }
})
