import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      Ember.run.next(() => {
        /*eslint-disable */
        Prism.highlightAll()
        /*eslint-enable */
        if (!this.get('media.isMobile')) {
          $('.guide-sidebar').height($("[class='content']").height())
        }else{
          $('.content').width($(window).width())
          $('.guide-markdown').width($(window).width())
          $('.frost-tabs').width($(window).width())
          $('#demo').width($(window).width())
        }

        /*push footer to bottom of viewport if page has no y-overflow*/
        var docHeight = $(window).height();
        var footerHeight = $('.footer').height();
        var footerTop = $('.footer').position().top + footerHeight;


        if (footerTop < docHeight) {
          $('.footer').css('margin-top', (docHeight - footerTop) + 'px');
        }

        $('.footer').css('visibility', 'visible');
      })
    }
  }
})
