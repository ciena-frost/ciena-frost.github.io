import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],

  collapsed: true,
  didInsertElement: function (){

  },
  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
      if (this.collapsed){
        $('.guide-sidebar-mobile').height($('.frost-info-bar').height());
      }else {
        $('.guide-sidebar-mobile').height('100%')
        $('.frost-navigation-sidebar-menu').css('background-color','#DDDDDD')
      }
    }
  }
})
