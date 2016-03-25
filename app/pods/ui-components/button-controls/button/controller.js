import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  vertical: false,

  actions: {
    onClickHandler () {
      console.log('button clicked')
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    /**
     * Toggle vertical rendering
     */
    toggleVertical () {
      this.toggleProperty('vertical')
    }
  }
})
