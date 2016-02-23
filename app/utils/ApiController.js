import Ember from 'ember'

var App = window.App = Ember.Application.extend()

App.ApiController = Ember.Controller.extend({
  queryParams: ['selectedTab'],
  selectedTab: 'description',
  actions: {
    tabSelected (tab) {
      this.set('selectedTab', tab)
      Ember.run.schedule('afterRender', this, function () {
        if ($('.footer').length) {
          var docHeight = $(window).height()
          var footerHeight = $('.footer').height()
          var footerTop = $('.footer').position().top + footerHeight
          if (footerTop < docHeight) {
            $('.footer').css('margin-top', (docHeight - ($('.frost-info-bar').height() + $('.frost-tabs').height() + footerHeight)) + 'px')
          }
          else{
            console.log("wtffff")
            $('.footer').css('margin-top', '')
          }
        }
      })
    }
  }
})

export default App.ApiController
