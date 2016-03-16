import Ember from 'ember'
import config from './config/environment'
import addRoute from 'frost-guide-custom-routing/utils/addRoute'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  let routerConfig = config.APP.routingConfig
  routerConfig.forEach((item) => {
    addRoute.call(this, item)
  })

  this.route('contributing', function () {
    this.route('frost-guide', function () {

    })
    this.route('contributors', function () {
      this.route('contributors', {
        path: '/'
      })
      this.route('contributor', {
        path: '/:login'
      })
    })
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
