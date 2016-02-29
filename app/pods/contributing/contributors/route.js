import Ember from 'ember';
//import Contributors from 'frost-guide/utils/contributors'

export default Ember.Route.extend({
  model: function () {
    return $.getJSON("data/contributors.json")
      avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
      repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
      handle: 'ewhte613',
      name: 'Eric Whitesss',
      avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
      repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
      handle: 'ewhite63',
      name: 'Eric White',
      avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
      repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
      handle: 'ewhite61',
      name: 'Eric White',
      avatar: 'https://avatars.githubusercontent.com/u/11548575?v=3',
      repos: ['frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css', 'frost-button', 'frost-css']
      }, {
      handle: 'ewhe613',
      name: 'Eric White',
  },
  breadCrumb: {
    title: 'Contributors'
  }
});