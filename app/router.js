import Ember from 'ember'
import config from './config/environment'
import addRoute from 'frost-guide-custom-routing/utils/addRoute'

var Router = Ember.Router.extend({
  location: config.locationType,
  resetScroll: function () {
    window.scrollTo(0, 0) // needed because of js fixed sidebar
  }.on('didTransition')
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

    })
    this.route('contributor', {
      path: '/contributors/:login'
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
