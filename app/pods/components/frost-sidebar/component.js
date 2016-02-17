import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],
  collapsed: true,
  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
      Ember.run.schedule('afterRender', this, function () {
      console.log("Rendered");
      if (this.collapsed){
        $('.md').width($(window).width() - $('.menu .collapsed').width())
      }
    })
    }
  }
})
