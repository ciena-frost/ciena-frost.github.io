import ApiController from 'frost-guide/utils/ApiController'
import Ember from 'ember'

export default ApiController.extend({
  actions: {
    action () {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
