import Ember from 'ember'

function highlightElement (selector) {
  selector.parent().children().each(function () {
    $(this).css('font-weight', 'lighter')
    $(this).css('border-left', '2px solid white')
  })
  selector.css('font-weight', 'bold')
  selector.css('border-left', '2px solid #009EEF')
}

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['active'],
  scrollspy: function () {
    var buttonSelector = this.$()

    $(this.id).on('scrollSpy:enter', function () {
      if (!($(window).scrollTop() + $(window).height() === $(document).height()) && !($(window).scrollTop() === 0)) {
        if(!window.clickScroll)
          highlightElement(buttonSelector)
      }
    })

    var offsetBottom = -0.65 * $(window).height()
    var offsetTop = 0.05 * $(window).height()

    $(this.id).scrollSpy({
      'offsetBottom': offsetBottom,
      'offsetTop': offsetTop
    })
  }.on('didInsertElement')
})
