import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  actions: {
    yEndReached () {
      this.notifications.addNotification({
        message: 'Scroll reached end of y axis',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },
    tabSelected (tab) {
      this.set('selectedTab', tab)
    }
  }
})
