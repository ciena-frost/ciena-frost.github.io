import Ember from 'ember'
import config from 'frost-guide/config/environment'

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),
  applicationMenuItems: config.APP.routingConfig,
  actions: {
    toggleCollapsed () {
      console.log("sending events to components")
      this.get('frostSidebar').send('toggleCollapsed') // send action to frost-sidebar component
    }
  }
})
