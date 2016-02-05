import ApiController from 'frost-guide/utils/ApiController'
export default ApiController.extend({
  actions: {
    click () {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
