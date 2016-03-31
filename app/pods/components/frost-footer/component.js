import Ember from 'ember'

function positionFooter () {    
  $('.footer').css('visibility', 'hidden')
  $('.footer').css('margin-top', '')
  var docHeight = $(window).height()
  var footerHeight = $('.footer').height()
  var footerTop = $('.footer').offset().top + footerHeight
  if (footerTop < docHeight) {
    $('.footer').css('margin-top', (docHeight - ($('.frost-info-bar').height() 
                                                 + $('.md').height() 
                                                 + $('.contributors-outlet').height() 
                                                 + $('.footer').height())))
  }
  $('.footer').css('visibility', 'visible')
}

function fillFooterContent () {
  if($('#description').length && $('#api').length && $('#demo').length){
    // this is a component page
    $('.contributors .footerHeading').html('Contributors')
    $('.connect .footerHeading').html('Connect')
  }
  else{
    $('.contributors .footerHeading').html('')
    $('.connect .footerHeading').html('')
  }
}
  
export default Ember.Component.extend({
  contributors: [],
  didInsertElement () {
    positionFooter()
    fillFooterContent()
    $(window).on('resize', function () {
      positionFooter()
    })
    $('.ember-application').bind("DOMSubtreeModified", positionFooter);
    $('.ember-application').bind("DOMSubtreeModified", fillFooterContent);
  },
  actions: {
    positionFooter () {
      positionFooter()
    }
  }
})
