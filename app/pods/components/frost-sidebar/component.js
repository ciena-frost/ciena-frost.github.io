import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],
  collapsed: true,
  didInsertElement: function (){
    Ember.run.schedule('afterRender', this, function () {
      if (this.collapsed){
        $('.md').width($(window).width() - $('.menu .collapsed').width())
      }
    })
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
