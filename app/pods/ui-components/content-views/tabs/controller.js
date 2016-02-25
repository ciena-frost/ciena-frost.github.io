import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  queryParams: ['selectedTab'],

  selectedTab: 'controller',

  actions: {
    tabSelected (tab) {
      this.set('selectedTab', tab)
    }
  }
})
