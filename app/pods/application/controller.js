import Ember from 'ember'
import config from 'frost-guide/config/environment'

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),
  applicationMenuItems: config.APP.routingConfig,
  windowRezise: function () {
    $(window).on('resize', function () {
      if($('.footer').length){
        var docHeight = $(window).height()
        var footerHeight = $('.footer').height()
        var footerTop = $('.footer').position().top + footerHeight
        if (footerTop < docHeight) {
          $('.footer').css('margin-top', (docHeight - footerTop) + 'px')
        }
      }
    })
  }.on('init')
})
