import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],
  collapsed: true,
  _leftSwipeListener: null,
  _rightSwipeListener: null,
  didInsertElement: function () {
    this._rightSwipeListener = Ember.run.bind(this, this.openMenu)
    this._leftSwipeListener = Ember.run.bind(this, this.closeMenu)
    this.set('register-as', this) // allows to receive actions from application controller

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
  openMenu: function () {
    this.set('collapsed', false)
  },
  closeMenu: function () {
    this.set('collapsed', true)
  },
  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
    }
  }
})
