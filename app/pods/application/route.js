import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      Ember.run.schedule('afterRender', this, function () {
        /*eslint-disable */
        Prism.highlightAll()
          /*eslint-enable */
        if (!this.get('media.isMobile')) {
          $('.guide-sidebar').height($("[class='content']").height())
        }

        /*push footer to bottom of viewport if page has no y-overflow*/
        if($('.footer').length){
          var docHeight = $(window).height();
          var footerHeight = $('.footer').height();
          var footerTop = $('.footer').position().top + footerHeight;


          if (footerTop < docHeight) {
            $('.footer').css('margin-top', (docHeight - footerHeight) + 'px')
          }

          $('.footer').css('visibility', 'visible');
        }
      })
    }
  }
})
