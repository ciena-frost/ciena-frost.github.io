import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  fiberplantNav: false,
  fiberplantNavTemplate: 'demo/nav-fiberplant',
  adminNav: false,
  adminNavTemplate: 'demo/nav-admin',
  navigation: false,

  actions: {
    openFiberplantNav () {
      this.set('fiberplantNav', true)
    },

    openAdminNav () {
      this.set('adminNav', true)
    },

    openRoute: function (route) {
      this.transitionToRoute(route)
    },

    tabSelected (tab) {
      this.set('selectedTab', tab)
    }
  }
})
