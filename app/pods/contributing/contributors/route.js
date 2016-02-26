import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
         handle: 'laflower',
         name: 'Justin Lafleur',
         avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
         repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
         handle: 'laflower',
         name: 'Justin Lafleur',
         avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
         repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
         handle: 'laflower',
         name: 'Justin Lafleur',
         avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
         repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
         handle: 'laflower',
         name: 'Justin Lafleur',
         avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
         repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }]
      },
  breadCrumb: {
    title: 'Contributors'
  }
});
