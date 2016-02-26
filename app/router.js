import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

var addRoute = function (routeConfig) {
  if (Ember.isEmpty(routeConfig.items)) {
    this.route(routeConfig.id)
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
  
  this.route('contributing', function() {
    this.route('frost-guide', function() {
      this.alias('Frost Guide')
    });
    this.route('contributors', function() {
      this.alias('Contributors')
    });
    this.route('contributor', { path: '/contributors/:handle' });
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
