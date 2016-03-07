import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['active'],
  addQueryParam: function(name, value){
    var myUrl = window.location.href
    var re = new RegExp("([?&]" + name + "=)[^&]+", "");

    function add(sep) {
        myUrl += sep + name + "=" + encodeURIComponent(value);
    }

    function change() {
        myUrl = myUrl.replace(re, "$1" + encodeURIComponent(value));
    }
    if (myUrl.indexOf("?") === -1) {
        add("?");
    } else {
        if (re.test(myUrl)) {
            change();
        } else {
            add("&");
        }
    }
    return myUrl
  },
  click: function () {
    $('#' + this.elementId).parent().children().each(function () {
      $(this).css('font-weight', 'lighter')
      $(this).css('border-left', '2px solid white')
    })
    $('#' + this.elementId).css('font-weight', 'bold')
    $('#' + this.elementId).css('border-left', '2px solid #009EEF')
    $('html, body').animate({scrollTop: $(this.to).offset().top - (0.125 * $(window).height())}, 200)
    window.location.href = this.addQueryParam('section',this.to.replace('#',''))
  },
  scrollspy: function () {
    var id = this.elementId
    $(this.to).on('scrollSpy:enter', function () {
      $('#' + id).parent().children().each(function () {
        $(this).css('font-weight', 'lighter')
        $(this).css('border-left', '2px solid white')
      })
      $('#' + id).css('font-weight', 'bold')
      $('#' + id).css('border-left', '2px solid #009EEF')
    })

    var offsetBottom = -0.65 * $(window).height()
    var offsetTop = 0.05 * $(window).height()

    $(this.to).scrollSpy({'offsetBottom': offsetBottom, 'offsetTop': offsetTop})
  }.on('didInsertElement')
})
