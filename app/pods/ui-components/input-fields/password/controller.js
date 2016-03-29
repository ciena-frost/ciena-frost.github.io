import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({

  actions: {
    onInputHandler (attrs) {
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
