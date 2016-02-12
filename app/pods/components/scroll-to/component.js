import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['active'],
  click: function () {
    $('#' + this.elementId).parent().children().each(function () {
      $(this).css('font-weight', 'lighter')
      $(this).css('border-left', '2px solid white')
    })
    $('#' + this.elementId).css('font-weight', 'bold')
    $('#' + this.elementId).css('border-left', '2px solid #009EEF')
    $('html, body').animate({scrollTop: $(this.to).offset().top - (0.125 * $(window).height())}, 200)
  },
  scrollspy: function() {
    var id = this.elementId
    $(this.to).on('scrollSpy:enter', function() {
      $('#' + id).parent().children().each(function () {
        $(this).css('font-weight', 'lighter')
        $(this).css('border-left', '2px solid white')
      })
      $('#' + id).css('font-weight', 'bold')
      $('#' + id).css('border-left', '2px solid #009EEF')  
    });

    var offsetBottom = - 0.65 * $(window).height();
    var offsetTop = 0.05 * $(window).height();  
  
    $(this.to).scrollSpy({'offsetBottom': offsetBottom, 'offsetTop': offsetTop});
  }.on('didInsertElement')
})
