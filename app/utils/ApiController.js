import Ember from 'ember'

var App = window.App = Ember.Application.extend()

function positionScrollSpy () {
  if ($(window).width() > 800) {
    $('.md-scrollspy').each(function () {
      $(this).css('display', 'inline')
      $(this).css('top', '150px')
      $(this).css('left', $(this).parent().width() + 200)
    })
  } else {
    $('.md-scrollspy').each(function () {
      $(this).css('display', 'none')
    })
  }
}

App.ApiController = Ember.Controller.extend({
  queryParams: ['selectedTab'],
  selectedTab: 'description',
  initScrollspy: function () {
    Ember.run.schedule('afterRender', function () {
      positionScrollSpy()
    })
    $(window).on('resize', function () {
      positionScrollSpy()
    })
  }.on('init'),
  actions: {
    tabSelected (tab) {
      this.set('selectedTab', tab)
      Ember.run.schedule('afterRender', this, function () {
        positionScrollSpy()

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
