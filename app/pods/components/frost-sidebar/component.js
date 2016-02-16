import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['frost-sidebar'],
  collapsed: true,
  windowRezise: function () {
    $(window).on('resize', function () {
      $('.guide-sidebar-mobile').height($('.frost-info-bar').height())
    })
  }.on('init'),
  didInsertElement: function (){
    $('.guide-sidebar-mobile').height($('.frost-info-bar').height())
  },
  actions: {
    toggleCollapsed () {
      this.toggleProperty('collapsed')
      if (this.collapsed){
        $('.guide-sidebar-mobile').height($('.frost-info-bar').height())
      }else {
        $('.guide-sidebar-mobile').height('100%')
      }
    }
  }
})
