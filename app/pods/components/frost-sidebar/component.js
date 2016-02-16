import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],

  collapsed: true,

  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
      if (this.collapsed){
        $('.frost-sidebar').height($('.frost-info-bar').height());
      }else {
        $('.frost-sidebar').height('100%')
        $('.frost-navigation-sidebar-menu').css('background-color','#DDDDDD')
        console.log("Changed background");
      }
    }
  }
})
