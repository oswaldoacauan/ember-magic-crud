'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var _this = this;

    return this.addBowerPackagesToProject([{name: 'bootstrap-switch', target:'^3.3.2'},
                                           {name: 'selectize', target: '~0.12.1'}]).then(function() {
      return _this.addPackagesToProject([{name: 'ember-cli-selectize', target: '0.4.3'},
                                        {name: 'ember-power-select', target: '0.7.2'},
                                        {name: 'ember-bootstrap-switch', target: '0.2.0'},
                                        {name: 'ember-validations', target: '^2.0.0-alpha.4'},
                                        {name: 'ember-cli-flash', target: '1.3.7'},
                                        {name: 'ember-imdt-table', target: 'latest'}]);
    });
  }
};
