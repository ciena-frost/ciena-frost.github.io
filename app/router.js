import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

var addRoute = function (routeConfig) {
  if (Ember.isEmpty(routeConfig.items)) {
    if (routeConfig.path !== undefined && routeConfig.modalName !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        this.modal(routeConfig.modalName, routeConfig.modal)
      })
    } else if (routeConfig.path !== undefined) {
      this.route(routeConfig.id, routeConfig.path)
    } else if (routeConfig.modalName !== undefined) {
      this.route(routeConfig.id, function () {
        this.modal(routeConfig.modalName, routeConfig.modal)
      })
    } else {
      this.route(routeConfig.id)
    }
  } else {
    this.route(routeConfig.id, function () {
      routeConfig.items.forEach((item) => {
        addRoute.call(this, item)
      })
    })
  }
}

Router.map(function () {
  let routerConfig = config.APP.routingConfig
  routerConfig.forEach((item) => {
    addRoute.call(this, item)
  })

  this.route('contributing', function () {
    this.route('frost-guide', function () {

    })
    this.route('contributors', function () {

    })
    this.route('contributor', { path: '/contributors/:login' })
  })

  this.route('overview', {
    path: '/'
  }, function () {
    this.route('vision', {
      path: '/'
    })
  })
})

export default Router
