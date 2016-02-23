import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],
  collapsed: true,
  _resizeListener: null,
  _leftSwipeListener: null,
  _rightSwipeListener: null,
  didInsertElement: function () {
    this._resizeListener = Ember.run.bind(this, this.adjustContent)
    this._rightSwipeListener = Ember.run.bind(this, this.openMenu)
    this._leftSwipeListener = Ember.run.bind(this, this.closeMenu)

    Ember.$(window).on('resize', this._resizeListener)
    Ember.$('.menu').on('swiperight', this._rightSwipeListener)
    Ember.$('.menu').on('swipeleft', this._leftSwipeListener)

    Ember.run.schedule('afterRender', this, function () {
      if (this.collapsed) {
        this.adjustContent()
      }
    })
  },
  willDestroyElement: function () {
    $('.md').removeAttr('style')
    if (this._resizeListener) {
      Ember.$(window).off('resize', this._resizeListener)
    }
  },
  adjustContent: function () {
//    console.log($(window).width() - $('.menu .collapsed').width())
    $('.md').width($(window).width() - $('.menu .collapsed').width())
    $('.md').css('max-width', $(window).width() - $('.menu .collapsed').width())
  },
  openMenu: function () {
    this.set('collapsed', false)
  },
  closeMenu: function () {
    this.set('collapsed', true)
  },
  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
      Ember.run.schedule('afterRender', this, function () {
        if (this.collapsed) {
          this.adjustContent()
        }
      })
    }
  }
})
