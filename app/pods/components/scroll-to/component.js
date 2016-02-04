import Ember from 'ember'

export default Ember.Component.extend({
  previousActiveId: null,
  tagName: 'button',
  classNames: ['active'],
  click: function () {
    $('#' + this.elementId).parent().children().each(function () {
      console.log(this.id)
      $(this).css('font-weight', 'normal')
    })
    $('#' + this.elementId).css('font-weight', 'bold')
    $('html, body').animate({scrollTop:$(this.to).offset().top - (0.3 * $(window).height())}, 500)
    this.previousActiveId = this.elementId
  }
})
