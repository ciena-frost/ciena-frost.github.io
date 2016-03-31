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
  if($('.guide-sidebar').offset().top + $('.guide-sidebar').height() > $('.footer').offset().top + $('.footer').height()){
    // the bottom of the sidebar is lower than the bottom of the footer
    $('.guide-sidebar').css('top', $('.footer').offset().top + $('.footer').height() - $('.guide-sidebar').height())    
  }
}

function fillFooterContent () {
  $('.ember-application').unbind("DOMSubtreeModified", fillFooterContent);
  
  if($('#description').length && $('#api').length && $('#demo').length){
    // this is a component page
    $('.contributors .footerHeading').html('Contributors')
    $('.contributors .contributors-list').html($('.contributors-list-data').html())
    $('.connect .footerHeading').html('Connect')
    $('.connect .gh-link').html($('.gh-link-data').html())
  }
  else{
    $('.contributors .footerHeading').html('')
    $('.contributors .contributors-list').html('')
    $('.connect .footerHeading').html('')
    $('.connect .gh-link').html('')
  }
  
  $('.ember-application').bind("DOMSubtreeModified", fillFooterContent);
}
  
export default Ember.Component.extend({
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