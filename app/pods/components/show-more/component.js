import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['show-more'],
  tagName: 'div',
  toggle: true,
  moreOrLess: 'show more',
    actions: {
      showMore () {
        if(this.toggle){
          $('#' + this.elementId + ' .more').css('display', 'inline');
          $('#' + this.elementId).css('z-index', '1');
          this.set('toggle', false);
          this.set('moreOrLess', 'show less');
        }
        else{
          $('#' + this.elementId + ' .more').css('display', 'none');
          this.set('toggle', true);
          this.set('moreOrLess', 'show more');
          $('#' + this.elementId).css('z-index', '');
        }
      }
    }
})
