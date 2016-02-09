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
  }
})
