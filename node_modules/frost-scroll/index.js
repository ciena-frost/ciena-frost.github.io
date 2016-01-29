/* globals module */
/* jshint node: true */

'use strict';

module.exports = {
  name: 'frost-scroll',

  included: function(app) {
    this._super.included(app);

    if (app.app) {
      app = app.app;
    }

    if (typeof app.import === "function") {
      app.import(app.bowerDirectory + '/perfect-scrollbar/js/perfect-scrollbar.js');
      app.import(app.bowerDirectory + '/perfect-scrollbar/css/perfect-scrollbar.css');
    }
  }
};
