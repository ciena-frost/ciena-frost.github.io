import ApiController from 'frost-guide/utils/ApiController'
import Ember from 'ember'
import config from 'frost-guide/config/environment'

export default ApiController.extend({
  selectedItems: Ember.A(),
  componentPath: Ember.computed({
    get () {
      if (config.isFrostGuideDirectory) {
        return 'user-list-item'
      } else {
        return 'ui-components/content-views/list/user-list-item'
      }
    }
  }),
  actions: {
    selected (attrs) {
      if (attrs.isSelected) {
        this.get('selectedItems').addObject(attrs.record)
      } else {
        this.get('selectedItems').removeObject(attrs.record)
      }
    },
    yEndReached () {
      this.notifications.addNotification({
        message: 'Scroll reached end of y axis',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
