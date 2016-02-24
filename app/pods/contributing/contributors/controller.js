import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  toggle: true,
  actions: {
    showMore () {
      if(this.toggle){
        $('.more').css('display', 'inline');
        this.toggle = false;
      }
      else{
        $('.more').css('display', 'none');
        this.toggle = true;
      }
    }
  }
})

