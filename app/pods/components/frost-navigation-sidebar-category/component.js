import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['sub-category'],
  routing: Ember.inject.service('-routing'),
  isExpanded: false,

  didInitAttrs  () {
    this.set('isExpanded', this.get('routing.currentRouteName').split('.').contains(this.get('category.id')))
  },

  actions: {
    toggleExpanded () {
      this.toggleProperty('isExpanded')
    },
    showView () {
      this.get('targetObject').send('toggleCollapsed') // sends action to parent component
      window.scrollTo(0, 0) // needed because of js fixed sidebar
    }
  }
})
