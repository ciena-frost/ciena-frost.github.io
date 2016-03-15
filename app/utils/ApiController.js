import Ember from 'ember'

var App = window.App = Ember.Application.extend()

App.ApiController = Ember.Controller.extend({
  queryParams: ['selectedTab'],
  selectedTab: 'description',
  initScrollspy: function () {
    Ember.run.schedule('afterRender', this, function () {
      if ($(window).width() > 800) {
        $('.md-scrollspy').css('display', 'inline')
        $('.md-scrollspy').css('top', '150px')
        $('.md-scrollspy').css('left', $('.md-scrollspy').parent().width() + 200)
      } else {
        $('.md-scrollspy').css('display', 'none')
      }
    })
    $(window).on('resize', function () {
      // reposition scrollspy
      if ($(window).width() > 800) {
        $('.md-scrollspy').css('display', 'inline')
        $('.md-scrollspy').css('top', '150px')
        $('.md-scrollspy').css('left', $('.md-scrollspy').parent().width() + 200)
      } else {
        $('.md-scrollspy').css('display', 'none')
      }
    })
  }.on('init'),
  actions: {
    tabSelected (tab) {
      this.set('selectedTab', tab)
      Ember.run.schedule('afterRender', this, function () {
        if ($(window).width() > 800) {
          $('.md-scrollspy').css('display', 'inline')
          $('.md-scrollspy').css('top', '150px')
          $('.md-scrollspy').css('left', $('.md-scrollspy').parent().width() + 200)
        } else {
          $('.md-scrollspy').css('display', 'none')
        }
        if ($('.footer').length) {
          var docHeight = $(window).height()
          var footerHeight = $('.footer').height()
          var footerTop = $('.footer').position().top + footerHeight
          if (footerTop < docHeight) {
            $('.footer').css('margin-top', (docHeight - ($('.frost-info-bar').height() + $('.frost-tabs').height() + footerHeight)) + 'px')
          } else {
            $('.footer').css('margin-top', '')
          }
        }
      })
    }
  }
})

export default App.ApiController
