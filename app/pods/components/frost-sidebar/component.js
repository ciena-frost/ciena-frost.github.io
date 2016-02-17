import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],
  collapsed: true,
  _resizeListener: null,
  didInsertElement: function (){
    this._resizeListener = Ember.run.bind(this, this.adjustContent);
    Ember.$(window).on('resize', this._resizeListener)
    Ember.run.schedule('afterRender', this, function () {
      if (this.collapsed){
        this.adjustContent();
      }
    })
  },
  willDestroyElement: function(){
    $('.md').removeAttr('style')
    if(this._resizeListener){
      Ember.$(window).off('resize', this._resizeListener);
    }
  },
  adjustContent: function () {
    console.log($(window).width() - $('.menu .collapsed').width())
    $('.md').width($(window).width() - $('.menu .collapsed').width())
  },
  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
      Ember.run.schedule('afterRender', this, function () {
      if (this.collapsed){
        $('.md').width($(window).width() - $('.menu .collapsed').width())
      }
    })
    }
  }
})
