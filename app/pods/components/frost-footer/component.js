import Ember from 'ember'

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var posInProgress = false;
var fillInProgress = false;
  
var observePositionFooter = new MutationObserver ( function() {
  if(!posInProgress){
    posInProgress = true;
    positionFooter()
    setTimeout(function(){
      posInProgress = false;
    }, 50);
  }
})

var observeFillFooterContent = new MutationObserver ( function() {
  if(!fillInProgress){
    fillInProgress = true;
    fillFooterContent()
    setTimeout(function(){
      fillInProgress = false;
    }, 50);
  }
})

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
}
  
export default Ember.Component.extend({
  didInsertElement () {
    positionFooter()
    fillFooterContent()
    
    $(window).on('resize', function () {
      positionFooter()
    })
    
    observePositionFooter.observe(document, {
      childList: true,
      subtree: true
    });
    
    observeFillFooterContent.observe(document, {
      childList: true,
      subtree: true
    });
  
  }
})
