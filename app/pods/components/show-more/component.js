import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['show-more'],
  toggle: true,
  moreOrLess: 'more',
    actions: {
      showMore () {
        if(this.toggle){
          $('#' + this.elementId + ' .more').css('display', 'inline');
          $('#' + this.elementId + ' .more').css('background-color', 'white');
          $('#' + this.elementId + ' .more').css('z-index', '9999');
          this.set('toggle', false);
          this.set('moreOrLess', 'less');
          console.log('changeToless')
        }
        else{
          $('#' + this.elementId + ' .more').css('display', 'none');
          this.set('toggle', true);
          this.set('moreOrLess', 'more');
          console.log('changeToMore')
        }
      }
    }
})
