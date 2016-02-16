import Ember from 'ember'
import config from 'frost-guide/config/environment'

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),
  applicationMenuItems: config.APP.routingConfig,
  windowRezise: function () {
    $(window).on('resize', function () {
      var docHeight = $(window).height()
      var footerHeight = $('.footer').height()
      var footerTop = $('.footer').position().top + footerHeight
      if (footerTop < docHeight) {
        $('.footer').css('margin-top', (docHeight - footerTop) + 'px')
      }

      if ($(window).width() > 768) {
        $('.guide-sidebar').height($("[class='content']").height())
      } 
      else {
        $('.content').width($(window).width())
        $('.guide-markdown').width($(window).width())
        $('.frost-tabs').width($(window).width())
        $('#demo').width($(window).width())
      }
    })
  }.on('init')
})