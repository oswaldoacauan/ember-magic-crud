'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addPackagesToProject([{name: 'ember-cli-selectize', target: '0.4.3'},
                                      {name: 'ember-bootstrap-switch', target: '0.2.0'},
                                      {name: 'ember-validations', target: '^2.0.0-alpha.4'},
                                      {name: 'ember-imdt-table', target: 'latest'}]);
  }
};
