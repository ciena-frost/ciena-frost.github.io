import Ember from 'ember'
  
function highlightElement(selector){
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
  addQueryParam: function (name, value) {
    var myUrl = window.location.href
    var re = new RegExp('([?&]' + name + '=)[^&]+', '')

    function add (sep) {
      myUrl += sep + name + '=' + encodeURIComponent(value)
    }

    function change () {
      myUrl = myUrl.replace(re, '$1' + encodeURIComponent(value))
    }
    if (myUrl.indexOf('?') === -1) {
      add('?')
    } else {
      if (re.test(myUrl)) {
        change()
      } else {
        add('&')
      }
    }
    return myUrl
  },
  click: function () {
    highlightElement($('#' + this.elementId))
    $('html, body').animate({scrollTop: $(this.to).offset().top - (0.125 * $(window).height())}, 200)
    window.location.href = this.addQueryParam('section', this.to.replace('#', ''))
  },
  scrollspy: function () {
    var id = this.elementId
    var bottomOrTop = true
    
    $(this.to).on('scrollSpy:enter', function () {
      if(!bottomOrTop)
        highlightElement($('#' + id))
    })
    
    $(window).scroll(function (event) {
      if($(window).scrollTop() + $(window).height() == $(document).height()) { // scrolling hit page bottom
        highlightElement($('#' + id).last())
        bottomOrTop = true
      }
      else if($(window).scrollTop() == 0){
        highlightElement($('#' + id).parent().children().first())
        bottomOrTop = true
      }
      else{
        bottomOrTop = false
      }
    });

    var offsetBottom = -0.65 * $(window).height()
    var offsetTop = 0.05 * $(window).height()

    $(this.to).scrollSpy({'offsetBottom': offsetBottom, 'offsetTop': offsetTop})
  }.on('didInsertElement')
})
