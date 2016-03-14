import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  queryParams: ['selectedTab'],

  selectedTab: 'controller',

  actions: {
    demoTabSelected (tab) {
      this.set('demoTabSelected', tab)
    }
  }
})
