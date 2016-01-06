"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('crud-baseline/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].FixtureAdapter.extend({
        queryFixtures: function queryFixtures(records, query, type) {
            return records.filter(function (record) {
                for (var key in query) {
                    if (!query.hasOwnProperty(key)) {
                        continue;
                    }
                    var value = query[key];
                    if (record[key] !== value) {
                        return false;
                    }
                }
                return true;
            });
        }
    });

});
define('crud-baseline/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'crud-baseline/config/environment', 'crud-baseline/models/area-processo', 'crud-baseline/models/meta-especifica', 'crud-baseline/models/meta-generica', 'crud-baseline/models/modelo', 'crud-baseline/models/nivel-capacidade', 'crud-baseline/models/pratica-especifica', 'crud-baseline/models/produto-trabalho'], function (exports, Ember, Resolver, loadInitializers, config, AreaProcesso, MetaEspecifica, MetaGenerica, Modelo, NivelCapacidade, PraticaEspecifica, ProdutoTrabalho) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  for (var i = 3; i <= 25; i++) {
    Modelo['default'].FIXTURES.push({
      id: i,
      ativo: true,
      sigla: "M" + i,
      nome: "Modelo " + i,
      descricao: "Descrição Modelo " + i
    });
  }

  for (var i = 3; i <= 25; i++) {
    NivelCapacidade['default'].FIXTURES.push({
      id: i,
      ativo: true,
      sigla: "NC" + i,
      nome: 'Nível de Capacidade ' + i,
      descricao: 'Descrição Nível de Capacidade ' + i
    });
  }

  for (var i = 1; i <= 500; i++) {
    ProdutoTrabalho['default'].FIXTURES.push({
      id: i,
      ativo: true,
      template: "template" + i,
      nome: "Produto de Trabalho " + i,
      descricao: "Descrição Produto de Trabalho " + i
    });
  }

  for (var i = 1; i <= 500; i++) {
    AreaProcesso['default'].FIXTURES.push({
      id: i,
      ativo: true,
      sigla: "A" + i,
      nome: "Área de Processo " + i,
      descricao: "Área de Processo " + i + " Descrição",
      modelo: Math.floor(Math.random() * 25) + 1,
      nivelmaturidade: Math.floor(Math.random() * 5) + 1
    });
  }

  for (var i = 1; i <= 500; i++) {
    MetaEspecifica['default'].FIXTURES.push({
      id: i,
      ativo: true,
      sigla: "ME" + i,
      nome: "Meta Específica " + i,
      descricao: "Meta Específica " + i + " Descrição",
      areaprocesso: Math.floor(Math.random() * 500) + 1
    });
  }

  for (var i = 1; i <= 500; i++) {
    MetaGenerica['default'].FIXTURES.push({
      id: i,
      ativo: true,
      nome: 'Meta Genérica ' + i,
      sigla: "MG" + i,
      descricao: 'Descrição Meta Genérica ' + i,
      modelo: Math.floor(Math.random() * 25) + 1,
      nivelcapacidade: 1
    });
  }

  for (var i = 1; i <= 500; i++) {
    var array = [];
    for (var j = 1; j <= 500; j++) {
      if (Math.random() < 0.01) {
        array.push(j);
      }
    }
    // console.log(array);
    PraticaEspecifica['default'].FIXTURES.push({
      id: i,
      ativo: true,
      sigla: "P" + i,
      nome: "Prática Específica " + i,
      descricao: "Prática Específica " + i + " Descrição",
      metaespecifica: Math.floor(Math.random() * 500) + 1,
      produtostrabalho: array
    });
  }

  exports['default'] = App;

});
define('crud-baseline/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'crud-baseline/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('crud-baseline/components/bootstrap-switch', ['exports', 'ember-bootstrap-switch/components/bootstrap-switch'], function (exports, BootstrapSwitchComponent) {

	'use strict';

	exports['default'] = BootstrapSwitchComponent['default'];

});
define('crud-baseline/components/bs-switch', ['exports', 'ember-bootstrap-switch/components/bootstrap-switch'], function (exports, BootstrapSwitchComponent) {

	'use strict';

	exports['default'] = BootstrapSwitchComponent['default'];

});
define('crud-baseline/components/ember-selectize', ['exports', 'ember-cli-selectize/components/ember-selectize'], function (exports, EmberSelectizeComponent) {

	'use strict';

	exports['default'] = EmberSelectizeComponent['default'];

});
define('crud-baseline/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, FlashMessage) {

	'use strict';

	exports['default'] = FlashMessage['default'];

});
define('crud-baseline/components/imdt-table', ['exports', 'ember-imdt-table/components/imdt-table'], function (exports, imdt_table) {

	'use strict';



	exports['default'] = imdt_table['default'];

});
define('crud-baseline/components/magic-form', ['exports', 'ember-imdt-magic-crud/components/magic-form'], function (exports, magic_form) {

	'use strict';



	exports['default'] = magic_form['default'];

});
define('crud-baseline/components/magic-input', ['exports', 'ember-imdt-magic-crud/components/magic-input'], function (exports, magic_input) {

	'use strict';



	exports['default'] = magic_input['default'];

});
define('crud-baseline/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('crud-baseline/controllers/area-processo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'modelo.nome',
      columnTitle: 'Modelo'
    }, {
      contentPath: 'nivelmaturidade.nome',
      columnTitle: 'Nível Maturidade'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }, {
      attribute: 'model.modelo',
      label: 'Modelo',
      type: 'select',
      selectFunction: function selectFunction(self) {
        return self.store.filter('modelo', {}, function (modelo) {
          return modelo.get('ativo') || self.get('model.modelo.id') === modelo.id;
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations: {
        relationshipPresence: true
      }
    }, {
      attribute: 'model.nivelmaturidade',
      label: 'Nível de Maturidade',
      type: 'select',
      selectFunction: function selectFunction(self) {
        return self.store.filter('nivel-maturidade', {}, function (nivelMaturidade) {
          return nivelMaturidade.get('ativo') || self.get('model.nivel-maturidade.id') === nivelMaturidade.id;
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations: {
        relationshipPresence: true
      }
    }]
  });

});
define('crud-baseline/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('crud-baseline/controllers/meta-especifica', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'areaprocesso.nome',
      columnTitle: 'Área de Processo'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }, {
      attribute: 'model.areaprocesso',
      label: 'Área de Processo',
      type: 'select',
      selectFunction: function selectFunction(self) {
        return self.store.filter('area-processo', {}, function (areaProcesso) {
          return areaProcesso.get('ativo') || self.get('model.areaprocesso.id') === areaProcesso.get('id');
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome'
    }]
  });

});
define('crud-baseline/controllers/meta-generica', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'modelo.nome',
      columnTitle: 'Modelo'
    }, {
      contentPath: 'nivelcapacidade.nome',
      columnTitle: 'Nível de Capacidade'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }, {
      attribute: 'model.modelo',
      label: 'Modelo',
      type: 'select',
      selectFunction: function selectFunction(self) {
        return self.store.filter('modelo', {}, function (item) {
          return item.get('ativo') || self.get('model.modelo.id') === item.id;
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations: {
        relationshipPresence: true
      }
    }, {
      attribute: 'model.nivelcapacidade',
      label: 'Nível de Capacidade',
      type: 'select',
      selectFunction: function selectFunction(self) {
        return self.store.filter('nivel-capacidade', {}, function (item) {
          return item.get('ativo') || self.get('model.nivel-capacidade.id') === item.id;
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations: {
        relationshipPresence: true
      }
    }]
  });

});
define('crud-baseline/controllers/modelo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }]
  });

});
define('crud-baseline/controllers/nivel-capacidade', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }]
  });

});
define('crud-baseline/controllers/nivel-maturidade', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }]
  });

});
define('crud-baseline/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('crud-baseline/controllers/pratica-especifica', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'sigla',
      columnTitle: 'Sigla'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'metaespecifica.nome',
      columnTitle: 'Meta Específica'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 2 }
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }, {
      attribute: 'model.metaespecifica',
      label: 'Meta Específica',
      type: 'select',
      selectFunction: function selectFunction(self) {
        return self.store.filter('meta-especifica', {}, function (meta) {
          return meta.get('ativo') || self.get('model.metaespecifica.id') === meta.get('id');
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations: {
        relationshipPresence: true
      }
    }, {
      attribute: 'model.produtostrabalho',
      label: 'Produtos de Trabalho',
      type: 'multiselect',
      selectFunction: function selectFunction(self) {
        return self.store.filter('produto-trabalho', {}, function (produtotrabalho) {
          return produtotrabalho.get('ativo');
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations: {
        relationshipPresence: true
      }
    }]
  });

});
define('crud-baseline/controllers/produto-trabalho', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var A = Ember['default'].A;

  exports['default'] = Ember['default'].Controller.extend({
    tableOptionsMC: new A([{
      contentPath: 'id',
      columnTitle: 'Id'
    }, {
      contentPath: 'template',
      columnTitle: 'Template'
    }, {
      contentPath: 'nome',
      columnTitle: 'Nome'
    }, {
      contentPath: 'descricao',
      columnTitle: 'Descrição'
    }, {
      contentPath: 'template',
      columnTitle: 'Ações',
      template: 'custom/table-actions',
      isSortable: false
    }]),

    formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.template',
      label: 'Sigla',
      type: 'text',
      validations: {
        presence: true
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations: {
        presence: true,
        length: { minimum: 3 }
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations: {
        presence: true
      }
    }]
  });

});
define('crud-baseline/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, Flash) {

	'use strict';

	exports['default'] = Flash['default'];

});
define('crud-baseline/helpers/get', ['exports', 'ember', 'ember-get-helper/helpers/get', 'ember-get-helper/helpers/get-glimmer'], function (exports, Ember, get, getGlimmerHelper) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = getGlimmerHelper['default'];
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(get.getHelper);
  }

  exports['default'] = forExport;

});
define('crud-baseline/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crud-baseline/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('crud-baseline/initializers/export-application-global', ['exports', 'ember', 'crud-baseline/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('crud-baseline/initializers/flash-messages', ['exports', 'crud-baseline/config/environment'], function (exports, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var flashMessageDefaults = config['default'].flashMessageDefaults;
    var injectionFactories = flashMessageDefaults.injectionFactories;

    application.register('config:flash-messages', flashMessageDefaults, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };

});
define('crud-baseline/initializers/get-helper', ['exports', 'ember', 'ember-get-helper/utils/register-helper', 'ember-get-helper/helpers/get', 'ember-get-helper/helpers/get-glimmer'], function (exports, Em, register_helper, getHelper, getHelperGlimmer) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{
    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Em['default'].Helper) {
      return;
    }

    register_helper.registerHelper('get', getHelper['default']);
  }

  exports['default'] = {
    name: 'get-helper',
    initialize: initialize
  };

});
define('crud-baseline/mixins/magic-crud', ['exports', 'ember-imdt-magic-crud/mixins/magic-add-controller'], function (exports, magic_add_controller) {

	'use strict';



	exports['default'] = magic_add_controller['default'];

});
define('crud-baseline/mixins/magic-route', ['exports', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, magic_route) {

	'use strict';



	exports['default'] = magic_route['default'];

});
define('crud-baseline/mixins/rollback-relationship', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    rollbackAttributes: function rollbackAttributes() {
      this._super();
      this.rollbackRelationships();
    },

    rollbackRelationships: function rollbackRelationships() {
      var model = this;
      model.eachRelationship(function (name, meta) {
        if (meta.kind === 'belongsTo') {
          (function () {
            var oldId = model.get(name + 'Id');
            if (oldId) {
              model.get(name).then(function (child) {
                if (!(child && child.get('id') === oldId)) {
                  model.store.findRecord(meta.type, oldId).then(function (originalRecord) {
                    model.set(name, originalRecord);
                  });
                }
              });
            }
          })();
        } else if (meta.kind === 'hasMany') {
          (function () {
            var oldIds = model.get(name + 'Ids');
            model.get(name).then(function (child) {
              child.forEach(function (item) {
                child.popObject(item);
              });

              oldIds.forEach(function (item) {
                child.pushObject(item);
              });
            });
          })();
        }
      });
    },

    // keep a cache of all belongsTo ids before there are any user-initiated changes
    // so we can roll back manually in `rollbackAttributes`
    cacheRelationships: function cacheRelationships() {
      var model = this;
      model.eachRelationship(function (name, meta) {
        if (meta.kind === 'belongsTo') {
          model.get(name).then(function (child) {
            if (child && child.get('id')) {
              model.set(name + 'Id', child.get('id'));
            }
          });
        } else if (meta.kind === 'hasMany') {
          model.get(name).then(function (child) {
            if (child) {
              (function () {
                var cachedMany = [];
                child.forEach(function (item) {
                  cachedMany.push(item);
                });
                model.set(name + 'Ids', cachedMany);
              })();
            }
          });
        }
      });
    },

    ready: function ready() {
      var _this = this;

      setTimeout(function () {
        _this.cacheRelationships();
      });
    }
  });

});
define('crud-baseline/models/area-processo', ['exports', 'ember-data', 'crud-baseline/mixins/rollback-relationship'], function (exports, DS, RollbackRelationship) {

  'use strict';

  var AreaProcesso = DS['default'].Model.extend(RollbackRelationship['default'], {
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string'),

    modelo: DS['default'].belongsTo('modelo', { async: true }),
    nivelmaturidade: DS['default'].belongsTo('nivel-maturidade', { async: true })
  });

  AreaProcesso.reopenClass({
    FIXTURES: []
  });

  // for(var i = 1; i <= 500; i++){
  //   AreaProcesso.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     sigla: "A" + i,
  //     nome: "Área de Processo " + i,
  //     descricao: "Área de Processo " + i + " Descrição",
  //     modelo: Math.floor(Math.random() * (25)) + 1,
  //     nivelmaturidade: Math.floor(Math.random() * (5)) + 1
  //   });
  // }

  exports['default'] = AreaProcesso;

});
define('crud-baseline/models/meta-especifica', ['exports', 'ember-data', 'crud-baseline/mixins/rollback-relationship'], function (exports, DS, RollbackRelationship) {

  'use strict';

  var MetaEspecifica = DS['default'].Model.extend(RollbackRelationship['default'], {
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string'),

    areaprocesso: DS['default'].belongsTo('area-processo', { async: true })
  });

  MetaEspecifica.reopenClass({
    FIXTURES: []
  });

  // for(var i = 1; i <= 500; i++){
  //   MetaEspecifica.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     sigla: "ME" + i,
  //     nome: "Meta Específica " + i,
  //     descricao: "Meta Específica " + i + " Descrição",
  //     areaprocesso: Math.floor(Math.random() * (500)) + 1
  //   });
  // }

  exports['default'] = MetaEspecifica;

});
define('crud-baseline/models/meta-generica', ['exports', 'ember-data', 'crud-baseline/mixins/rollback-relationship'], function (exports, DS, RollbackRelationship) {

  'use strict';

  var MetaGenerica = DS['default'].Model.extend(RollbackRelationship['default'], {
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string'),

    modelo: DS['default'].belongsTo('modelo', { async: true }),
    nivelcapacidade: DS['default'].belongsTo('nivel-capacidade', { async: true, defaultValue: 1 }),

    modeloid: Ember.computed.alias('modelo.id')
  });

  MetaGenerica.reopenClass({
    FIXTURES: []
  });

  // for(var i = 1; i <= 500; i++){
  //   MetaGenerica.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     nome: 'Meta Genérica ' + i,
  //     sigla: "MG" + i,
  //     descricao: 'Descrição Meta Genérica ' + i,
  //     modelo: Math.floor(Math.random() * (25)) + 1,
  //     nivelcapacidade: 1
  //   });
  // }

  exports['default'] = MetaGenerica;

});
define('crud-baseline/models/modelo', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Modelo = DS['default'].Model.extend({
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string')

  });

  // metasgenericas: DS.hasMany('meta-generica', {async: true}),
  // areasprocesso: DS.hasMany('area-processo', {async: true})
  Modelo.reopenClass({
    FIXTURES: [{
      id: 1,
      ativo: true,
      sigla: "CM",
      nome: "CMMI",
      descricao: "CMMI Descrição"
    }, // metasgenericas: [1],
    // areasprocesso: [1]
    {
      id: 2,
      ativo: true,
      sigla: "MP",
      nome: "MPS.BR",
      descricao: "MPS.BR Descrição"
    }]
  });

  // for(var i = 3; i <= 25; i++){
  //   Modelo.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     sigla: "M" + i,
  //     nome: "Modelo " + i,
  //     descricao: "Descrição Modelo " + i,
  //   });
  // }

  // areasprocesso: [2]
  exports['default'] = Modelo;

});
define('crud-baseline/models/nivel-capacidade', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var NivelCapacidade = DS['default'].Model.extend({
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string')
  });

  NivelCapacidade.reopenClass({
    FIXTURES: [{
      id: 1,
      ativo: true,
      nome: 'Nível de Capacidade 1',
      sigla: 'NC',
      descricao: 'Descrição Nível de Capacidade 1'
    }]
  });

  // for(var i = 3; i <= 25; i++){
  //   NivelCapacidade.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     sigla: "NC" + i,
  //     nome: 'Nível de Capacidade ' + i,
  //     descricao: 'Descrição Nível de Capacidade ' + i,
  //   });
  // }

  exports['default'] = NivelCapacidade;

});
define('crud-baseline/models/nivel-maturidade', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var NivelMaturidade = DS['default'].Model.extend({
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string')
  });

  NivelMaturidade.reopenClass({
    FIXTURES: [{
      id: 1,
      ativo: true,
      nome: 'Executado',
      sigla: 'N1',
      descricao: 'Descrição Executado'
    }, {
      id: 2,
      ativo: true,
      nome: 'Gerenciado',
      sigla: 'N2',
      descricao: 'Descrição Gerenciado'
    }, {
      id: 3,
      ativo: true,
      nome: 'Definido',
      sigla: 'N3',
      descricao: 'Descrição Definido'
    }, {
      id: 4,
      ativo: true,
      nome: 'Parametrizado',
      sigla: 'N4',
      descricao: 'Quantitativamente Gerenciado'
    }, {
      id: 5,
      ativo: true,
      nome: 'Otimizado',
      sigla: 'N5',
      descricao: 'Descrição Otimizado'
    }]
  });

  exports['default'] = NivelMaturidade;

});
define('crud-baseline/models/pratica-especifica', ['exports', 'ember-data', 'crud-baseline/mixins/rollback-relationship'], function (exports, DS, RollbackRelationship) {

  'use strict';

  var PraticaEspecifica = DS['default'].Model.extend(RollbackRelationship['default'], {
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    sigla: DS['default'].attr('string'),
    descricao: DS['default'].attr('string'),

    metaespecifica: DS['default'].belongsTo('meta-especifica', { async: true }),
    produtostrabalho: DS['default'].hasMany('produto-trabalho', { async: true })
  });

  PraticaEspecifica.reopenClass({
    FIXTURES: []
  });

  // for(var i = 1; i <= 500; i++){
  //   var array = []
  //   for (var j = 1; j <= 10; j++) {
  //     if(Math.random() < 0.50){
  //       array.push(j);
  //     }
  //   }
  //   // console.log(array);
  //   PraticaEspecifica.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     sigla: "P" + i,
  //     nome: "Prática Específica " + i,
  //     descricao: "Prática Específica " + i + " Descrição",
  //     metaespecifica: 1,
  //     produtostrabalho: array
  //   });
  // }

  exports['default'] = PraticaEspecifica;

});
define('crud-baseline/models/produto-trabalho', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var ProdutoTrabalho = DS['default'].Model.extend({
    ativo: DS['default'].attr('boolean'),
    nome: DS['default'].attr('string'),
    template: DS['default'].attr('string'),
    descricao: DS['default'].attr('string')
  });

  ProdutoTrabalho.reopenClass({
    FIXTURES: []
  });

  // for(var i = 1; i <= 500; i++){
  //   ProdutoTrabalho.FIXTURES.push({
  //     id: i,
  //     ativo: true,
  //     template: "template"+i,
  //     nome: "Produto de Trabalho "+i,
  //     descricao: "Descrição Produto de Trabalho "+i,
  //   });
  // }

  exports['default'] = ProdutoTrabalho;

});
define('crud-baseline/router', ['exports', 'ember', 'crud-baseline/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('modelo', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('meta-generica', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('nivel-capacidade', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('nivel-maturidade', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('area-processo', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('meta-especifica', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('pratica-especifica', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
    this.route('produto-trabalho', function () {
      this.route('add');
      this.route('edit', { path: 'edit/:id' });
    });
  });

  exports['default'] = Router;

});
define('crud-baseline/routes/area-processo/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/area-processo/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/area-processo', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/meta-especifica/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/meta-especifica/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/meta-especifica', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/meta-generica/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/meta-generica/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/meta-generica', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/modelo/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/modelo/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/modelo', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/nivel-capacidade/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/nivel-capacidade/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/nivel-capacidade', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/nivel-maturidade/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/nivel-maturidade/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/nivel-maturidade', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/pratica-especifica/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/pratica-especifica/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/pratica-especifica', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {
    beforeModel: function beforeModel() {
      this.store.findAll('area-processo');
      this.store.findAll('meta-especifica');
      this.store.findAll('meta-generica');
      this.store.findAll('modelo');
      this.store.findAll('nivel-capacidade');
      this.store.findAll('nivel-maturidade');
      this.store.findAll('pratica-especifica');
      this.store.findAll('produto-trabalho');
    }
  });

});
define('crud-baseline/routes/produto-trabalho/add', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/produto-trabalho/edit', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/routes/produto-trabalho', ['exports', 'ember', 'ember-imdt-magic-crud/mixins/magic-route'], function (exports, Ember, MagicRoute) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(MagicRoute['default'], {});

});
define('crud-baseline/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, FlashMessagesService) {

	'use strict';

	exports['default'] = FlashMessagesService['default'];

});
define('crud-baseline/services/validations', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });

});
define('crud-baseline/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 14
            },
            "end": {
              "line": 10,
              "column": 41
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Modelo");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 18
            },
            "end": {
              "line": 16,
              "column": 61
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Metas Genéricas");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 18
            },
            "end": {
              "line": 17,
              "column": 65
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Metas Específicas");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 18
            },
            "end": {
              "line": 24,
              "column": 69
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Níveis de Capacidade");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 18
            },
            "end": {
              "line": 25,
              "column": 69
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Níveis de Maturidade");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 14
            },
            "end": {
              "line": 29,
              "column": 59
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Áreas de Processo");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 14
            },
            "end": {
              "line": 30,
              "column": 67
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Práticas Específicas");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child7 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 14
            },
            "end": {
              "line": 31,
              "column": 65
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Produtos de Trabalho");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child8 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 2
            },
            "end": {
              "line": 43,
              "column": 2
            }
          },
          "moduleName": "crud-baseline/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","flash-message",[],["flash",["subexpr","@mut",[["get","flash",["loc",[null,[42,26],[42,31]]]]],[],[]]],["loc",[null,[42,4],[42,33]]]]
        ],
        locals: ["flash"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2,"class","navbar navbar-default");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container-fluid");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","navbar-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","navbar-brand");
        dom.setAttribute(el5,"href","#");
        var el6 = dom.createTextNode("MMPS");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","collapse navbar-collapse");
        dom.setAttribute(el4,"id","bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","dropdown");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","dropdown-toggle");
        dom.setAttribute(el7,"data-toggle","dropdown");
        var el8 = dom.createTextNode("Metas ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","caret");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","dropdown-menu");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","dropdown");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"class","dropdown-toggle");
        dom.setAttribute(el7,"data-toggle","dropdown");
        var el8 = dom.createTextNode("Níveis ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","caret");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","dropdown-menu");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","flash-messages");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1, 3, 1]);
        var element2 = dom.childAt(element1, [3, 3]);
        var element3 = dom.childAt(element1, [5, 3]);
        var morphs = new Array(11);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element3, [3]),0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [7]),0,0);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [9]),0,0);
        morphs[7] = dom.createMorphAt(dom.childAt(element1, [11]),0,0);
        morphs[8] = dom.createMorphAt(element0,3,3);
        morphs[9] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[10] = dom.createMorphAt(fragment,4,4,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["modelo"],[],0,null,["loc",[null,[10,14],[10,53]]]],
        ["block","link-to",["meta-generica"],[],1,null,["loc",[null,[16,18],[16,73]]]],
        ["block","link-to",["meta-especifica"],[],2,null,["loc",[null,[17,18],[17,77]]]],
        ["block","link-to",["nivel-capacidade"],[],3,null,["loc",[null,[24,18],[24,81]]]],
        ["block","link-to",["nivel-maturidade"],[],4,null,["loc",[null,[25,18],[25,81]]]],
        ["block","link-to",["area-processo"],[],5,null,["loc",[null,[29,14],[29,71]]]],
        ["block","link-to",["pratica-especifica"],[],6,null,["loc",[null,[30,14],[30,79]]]],
        ["block","link-to",["produto-trabalho"],[],7,null,["loc",[null,[31,14],[31,77]]]],
        ["content","outlet",["loc",[null,[37,2],[37,12]]]],
        ["block","each",[["get","flashMessages.queue",["loc",[null,[41,10],[41,29]]]]],[],8,null,["loc",[null,[41,2],[43,11]]]],
        ["content","ember-imdt-modal",["loc",[null,[46,0],[46,20]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  }()));

});
define('crud-baseline/templates/components/imdt-table/pagination/numeric', ['exports', 'ember-imdt-table/templates/components/imdt-table/pagination/numeric'], function (exports, numeric) {

	'use strict';



	exports['default'] = numeric['default'];

});
define('crud-baseline/templates/components/imdt-table/pagination/simple', ['exports', 'ember-imdt-table/templates/components/imdt-table/pagination/simple'], function (exports, simple) {

	'use strict';



	exports['default'] = simple['default'];

});
define('crud-baseline/templates/components/imdt-table/pagination', ['exports', 'ember-imdt-table/templates/components/imdt-table/pagination'], function (exports, pagination) {

	'use strict';



	exports['default'] = pagination['default'];

});
define('crud-baseline/templates/components/imdt-table/search', ['exports', 'ember-imdt-table/templates/components/imdt-table/search'], function (exports, search) {

	'use strict';



	exports['default'] = search['default'];

});
define('crud-baseline/templates/components/magic-form', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "crud-baseline/templates/components/magic-form.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","magic-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[4,12],[4,17]]]]],[],[]],"attribute",["subexpr","@mut",[["get","definition.attribute",["loc",[null,[5,16],[5,36]]]]],[],[]],"label",["subexpr","@mut",[["get","definition.label",["loc",[null,[6,12],[6,28]]]]],[],[]],"type",["subexpr","@mut",[["get","definition.type",["loc",[null,[7,11],[7,26]]]]],[],[]],"selectFunction",["subexpr","@mut",[["get","definition.selectFunction",["loc",[null,[8,21],[8,46]]]]],[],[]],"selectContent",["subexpr","@mut",[["get","definition.selectContent",["loc",[null,[9,20],[9,44]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","definition.selectValuePath",["loc",[null,[10,22],[10,48]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","definition.selectLabelPath",["loc",[null,[11,22],[11,48]]]]],[],[]],"errors",["subexpr","@mut",[["get","errors",["loc",[null,[12,13],[12,19]]]]],[],[]],"submitted",["subexpr","@mut",[["get","submitted",["loc",[null,[13,16],[13,25]]]]],[],[]]],["loc",[null,[3,4],[13,27]]]]
        ],
        locals: ["definition"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/components/magic-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","definitions",["loc",[null,[2,10],[2,21]]]]],[],0,null,["loc",[null,[2,2],[14,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('crud-baseline/templates/components/magic-input', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "crud-baseline/templates/components/magic-input.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","input",[],["class","form-control","type",["subexpr","@mut",[["get","type",["loc",[null,[5,38],[5,42]]]]],[],[]],"checked",["subexpr","@mut",[["get","value",["loc",[null,[5,51],[5,56]]]]],[],[]],"name",["subexpr","@mut",[["get","attribute",["loc",[null,[5,62],[5,71]]]]],[],[]]],["loc",[null,[5,4],[5,73]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "crud-baseline/templates/components/magic-input.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","bs-switch",[],["class","form-control","checked",["subexpr","@mut",[["get","value",["loc",[null,[7,45],[7,50]]]]],[],[]],"on-text","Ativo","off-text","Inativo"],["loc",[null,[7,4],[7,87]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 2
                },
                "end": {
                  "line": 10,
                  "column": 2
                }
              },
              "moduleName": "crud-baseline/templates/components/magic-input.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","input",[],["class","form-control","type",["subexpr","@mut",[["get","type",["loc",[null,[9,38],[9,42]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[9,49],[9,54]]]]],[],[]],"name",["subexpr","@mut",[["get","attribute",["loc",[null,[9,60],[9,69]]]]],[],[]]],["loc",[null,[9,4],[9,71]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 10,
                    "column": 2
                  },
                  "end": {
                    "line": 17,
                    "column": 2
                  }
                },
                "moduleName": "crud-baseline/templates/components/magic-input.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["inline","ember-selectize",[],["content",["subexpr","@mut",[["get","processedContent",["loc",[null,[12,14],[12,30]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","processedPath",["loc",[null,[13,22],[13,35]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","processedLabel",["loc",[null,[14,22],[14,36]]]]],[],[]],"selection",["subexpr","@mut",[["get","value",["loc",[null,[15,16],[15,21]]]]],[],[]]],["loc",[null,[11,4],[15,23]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "revision": "Ember@1.13.11",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 17,
                      "column": 2
                    },
                    "end": {
                      "line": 24,
                      "column": 2
                    }
                  },
                  "moduleName": "crud-baseline/templates/components/magic-input.hbs"
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("    ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n  ");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                  return morphs;
                },
                statements: [
                  ["inline","ember-selectize",[],["multiple",true,"content",["subexpr","@mut",[["get","processedContent",["loc",[null,[20,14],[20,30]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","processedPath",["loc",[null,[21,22],[21,35]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","processedLabel",["loc",[null,[22,22],[22,36]]]]],[],[]],"selection",["subexpr","@mut",[["get","value",["loc",[null,[23,16],[23,21]]]]],[],[]]],["loc",[null,[18,4],[23,23]]]]
                ],
                locals: [],
                templates: []
              };
            }());
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 17,
                    "column": 2
                  },
                  "end": {
                    "line": 24,
                    "column": 2
                  }
                },
                "moduleName": "crud-baseline/templates/components/magic-input.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [
                ["block","if",[["get","multiSelect",["loc",[null,[17,12],[17,23]]]]],[],0,null,["loc",[null,[17,2],[24,2]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 2
                },
                "end": {
                  "line": 24,
                  "column": 2
                }
              },
              "moduleName": "crud-baseline/templates/components/magic-input.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","if",[["get","select",["loc",[null,[10,12],[10,18]]]]],[],0,1,["loc",[null,[10,2],[24,2]]]]
            ],
            locals: [],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 24,
                "column": 2
              }
            },
            "moduleName": "crud-baseline/templates/components/magic-input.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","text",["loc",[null,[8,12],[8,16]]]]],[],0,1,["loc",[null,[8,2],[24,2]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 24,
              "column": 2
            }
          },
          "moduleName": "crud-baseline/templates/components/magic-input.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","switch",["loc",[null,[6,12],[6,18]]]]],[],0,1,["loc",[null,[6,2],[24,2]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/components/magic-input.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'for');
        morphs[2] = dom.createMorphAt(element1,0,0);
        morphs[3] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",[["subexpr","if",[["get","activeErrors",["loc",[null,[1,17],[1,29]]]],"has-error"],[],["loc",[null,[1,12],[1,43]]]]]]],
        ["attribute","for",["concat",[["get","attribute",["loc",[null,[2,16],[2,25]]]]]]],
        ["content","label",["loc",[null,[2,29],[2,38]]]],
        ["block","if",[["get","checkbox",["loc",[null,[4,8],[4,16]]]]],[],0,1,["loc",[null,[4,2],[24,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('crud-baseline/templates/custom/table-actions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/custom/table-actions.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-warning edit");
        dom.setAttribute(el1,"type","button");
        dom.setAttribute(el1,"name","button");
        var el2 = dom.createTextNode("Edit");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-danger delete");
        dom.setAttribute(el1,"type","button");
        dom.setAttribute(el1,"name","button");
        var el2 = dom.createTextNode("Delete");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["element","action",["sendAction","editRecord",["get","record",["loc",[null,[1,100],[1,106]]]]],[],["loc",[null,[1,65],[1,108]]]],
        ["element","action",["sendAction","deleteRecord",["get","record",["loc",[null,[2,103],[2,109]]]]],[],["loc",[null,[2,66],[2,111]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('crud-baseline/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('crud-baseline/templates/magic-crud/form', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/magic-crud/form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","btn btn-primary");
        dom.setAttribute(el2,"type","button");
        dom.setAttribute(el2,"name","button");
        var el3 = dom.createTextNode("Save");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","magic-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[3,10],[3,15]]]]],[],[]],"errors",["subexpr","@mut",[["get","errors",["loc",[null,[4,11],[4,17]]]]],[],[]],"definitions",["subexpr","@mut",[["get","formDefinitionsMC",["loc",[null,[5,16],[5,33]]]]],[],[]],"submitted",["subexpr","@mut",[["get","submitted",["loc",[null,[6,14],[6,23]]]]],[],[]]],["loc",[null,[2,2],[6,25]]]],
        ["element","action",["saveRecord"],[],["loc",[null,[7,62],[7,85]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('crud-baseline/templates/magic-crud/table', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "crud-baseline/templates/magic-crud/table.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","add btn btn-success");
        dom.setAttribute(el1,"type","button");
        dom.setAttribute(el1,"name","button");
        var el2 = dom.createTextNode("Add");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
        return morphs;
      },
      statements: [
        ["element","action",["addRecord"],[],["loc",[null,[1,64],[1,86]]]],
        ["inline","imdt-table",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[5,10],[5,15]]]]],[],[]],"tableClassNames","table table-striped table-hover","columns",["subexpr","@mut",[["get","tableOptionsMC",["loc",[null,[7,10],[7,24]]]]],[],[]],"deleteRecord","deleteRecord","editRecord","editRecord"],["loc",[null,[4,0],[9,27]]]],
        ["inline","outlet",["magic-form"],[],["loc",[null,[11,0],[11,23]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('crud-baseline/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 4, col 43, \'type\' is defined but never used.\n\n1 error'); 
  });

});
define('crud-baseline/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/controllers/area-processo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/area-processo.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/area-processo.js should pass jshint.\ncontrollers/area-processo.js: line 72, col 82, Missing semicolon.\ncontrollers/area-processo.js: line 86, col 110, Missing semicolon.\n\n2 errors'); 
  });

});
define('crud-baseline/tests/controllers/meta-especifica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/meta-especifica.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/meta-especifica.js should pass jshint.\ncontrollers/meta-especifica.js: line 69, col 11, Missing semicolon.\n\n1 error'); 
  });

});
define('crud-baseline/tests/controllers/meta-generica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/meta-generica.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/meta-generica.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/controllers/modelo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/modelo.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/modelo.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/controllers/nivel-capacidade.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/nivel-capacidade.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/nivel-capacidade.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/controllers/nivel-maturidade.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/nivel-maturidade.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/nivel-maturidade.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/controllers/pratica-especifica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/pratica-especifica.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/pratica-especifica.js should pass jshint.\ncontrollers/pratica-especifica.js: line 69, col 11, Missing semicolon.\ncontrollers/pratica-especifica.js: line 83, col 11, Missing semicolon.\n\n2 errors'); 
  });

});
define('crud-baseline/tests/controllers/produto-trabalho.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/produto-trabalho.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/produto-trabalho.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/helpers/flash-message', ['ember-cli-flash/flash/object'], function (FlashObject) {

	'use strict';

	FlashObject['default'].reopen({ _setInitialState: null });

});
define('crud-baseline/tests/helpers/flash-message.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/flash-message.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/flash-message.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/helpers/resolver', ['exports', 'ember/resolver', 'crud-baseline/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('crud-baseline/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/helpers/start-app', ['exports', 'ember', 'crud-baseline/app', 'crud-baseline/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('crud-baseline/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, Ember, ember_qunit) {

  'use strict';

  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = Ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    ember_qunit.test(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }

  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }

});
define('crud-baseline/tests/integration/components/crud-input-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('crud-input', 'Integration | Component | crud input', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'crud-input', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'crud-input', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('crud-baseline/tests/integration/components/crud-input-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/crud-input-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/crud-input-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/mixins/rollback-relationship.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mixins');
  QUnit.test('mixins/rollback-relationship.js should pass jshint', function(assert) { 
    assert.ok(true, 'mixins/rollback-relationship.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/area-processo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/area-processo.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/area-processo.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/meta-especifica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/meta-especifica.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/meta-especifica.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/meta-generica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/meta-generica.js should pass jshint', function(assert) { 
    assert.ok(false, 'models/meta-generica.js should pass jshint.\nmodels/meta-generica.js: line 13, col 13, \'Ember\' is not defined.\n\n1 error'); 
  });

});
define('crud-baseline/tests/models/modelo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/modelo.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/modelo.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/nivel-capacidade.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/nivel-capacidade.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/nivel-capacidade.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/nivel-maturidade.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/nivel-maturidade.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/nivel-maturidade.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/pratica-especifica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/pratica-especifica.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/pratica-especifica.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/models/produto-trabalho.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/produto-trabalho.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/produto-trabalho.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/area-processo/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/area-processo');
  QUnit.test('routes/area-processo/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/area-processo/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/area-processo/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/area-processo');
  QUnit.test('routes/area-processo/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/area-processo/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/area-processo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/area-processo.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/area-processo.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/meta-especifica/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/meta-especifica');
  QUnit.test('routes/meta-especifica/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/meta-especifica/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/meta-especifica/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/meta-especifica');
  QUnit.test('routes/meta-especifica/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/meta-especifica/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/meta-especifica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/meta-especifica.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/meta-especifica.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/meta-generica/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/meta-generica');
  QUnit.test('routes/meta-generica/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/meta-generica/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/meta-generica/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/meta-generica');
  QUnit.test('routes/meta-generica/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/meta-generica/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/meta-generica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/meta-generica.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/meta-generica.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/modelo/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/modelo');
  QUnit.test('routes/modelo/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/modelo/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/modelo/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/modelo');
  QUnit.test('routes/modelo/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/modelo/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/modelo.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/modelo.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/modelo.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/nivel-capacidade/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/nivel-capacidade');
  QUnit.test('routes/nivel-capacidade/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/nivel-capacidade/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/nivel-capacidade/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/nivel-capacidade');
  QUnit.test('routes/nivel-capacidade/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/nivel-capacidade/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/nivel-capacidade.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/nivel-capacidade.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/nivel-capacidade.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/nivel-maturidade/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/nivel-maturidade');
  QUnit.test('routes/nivel-maturidade/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/nivel-maturidade/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/nivel-maturidade/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/nivel-maturidade');
  QUnit.test('routes/nivel-maturidade/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/nivel-maturidade/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/nivel-maturidade.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/nivel-maturidade.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/nivel-maturidade.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/pratica-especifica/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/pratica-especifica');
  QUnit.test('routes/pratica-especifica/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/pratica-especifica/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/pratica-especifica/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/pratica-especifica');
  QUnit.test('routes/pratica-especifica/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/pratica-especifica/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/pratica-especifica.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/pratica-especifica.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/pratica-especifica.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/produto-trabalho/add.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/produto-trabalho');
  QUnit.test('routes/produto-trabalho/add.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/produto-trabalho/add.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/produto-trabalho/edit.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/produto-trabalho');
  QUnit.test('routes/produto-trabalho/edit.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/produto-trabalho/edit.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/routes/produto-trabalho.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/produto-trabalho.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/produto-trabalho.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/test-helper', ['crud-baseline/tests/helpers/resolver', 'crud-baseline/tests/helpers/flash-message', 'ember-qunit'], function (resolver, __dep1__, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('crud-baseline/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('crud-baseline/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/area-processo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:area-processo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/area-processo-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/area-processo-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/area-processo-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/category-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:category', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/category-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/category-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/category-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/citizen/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:citizen/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/citizen/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers/citizen');
  QUnit.test('unit/controllers/citizen/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/citizen/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/citizen-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:citizen', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/citizen-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/citizen-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/citizen-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/city-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:city', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/city-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/city-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/city-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/meta-especifica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:meta-especifica', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/meta-especifica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/meta-especifica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/meta-especifica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/meta-generica/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:meta-generica/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/meta-generica/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers/meta-generica');
  QUnit.test('unit/controllers/meta-generica/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/meta-generica/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/meta-generica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:meta-generica', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/meta-generica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/meta-generica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/meta-generica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/modelo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:modelo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/modelo-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/modelo-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/modelo-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/nivel-capacidade-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:nivel-capacidade', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/nivel-capacidade-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/nivel-capacidade-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/nivel-capacidade-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/nivel-maturidade-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:nivel-maturidade', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/nivel-maturidade-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/nivel-maturidade-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/nivel-maturidade-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/person-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:person', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/person-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/person-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/person-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/pratica-especifica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:pratica-especifica', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/pratica-especifica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/pratica-especifica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/pratica-especifica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/controllers/produto-trabalho-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:produto-trabalho', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('crud-baseline/tests/unit/controllers/produto-trabalho-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/produto-trabalho-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/produto-trabalho-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/mixins/rollback-relationship-test', ['ember', 'crud-baseline/mixins/rollback-relationship', 'qunit'], function (Ember, RollbackRelationshipMixin, qunit) {

  'use strict';

  qunit.module('Unit | Mixin | rollback relationship');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var RollbackRelationshipObject = Ember['default'].Object.extend(RollbackRelationshipMixin['default']);
    var subject = RollbackRelationshipObject.create();
    assert.ok(subject);
  });

});
define('crud-baseline/tests/unit/mixins/rollback-relationship-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/rollback-relationship-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/mixins/rollback-relationship-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/area-processo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('area-processo', 'Unit | Model | area processo', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/area-processo-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/area-processo-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/area-processo-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/category-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('category', 'Unit | Model | category', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/category-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/category-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/category-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/citizen-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('citizen', 'Unit | Model | citizen', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/citizen-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/citizen-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/citizen-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/city-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('city', 'Unit | Model | city', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/city-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/city-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/city-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/meta-especifica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('meta-especifica', 'Unit | Model | meta especifica', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/meta-especifica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/meta-especifica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/meta-especifica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/meta-generica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('meta-generica', 'Unit | Model | meta generica', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/meta-generica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/meta-generica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/meta-generica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/modelo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('modelo', 'Unit | Model | modelo', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/modelo-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/modelo-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/modelo-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/nivel-capacidade-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('nivel-capacidade', 'Unit | Model | nivel capacidade', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/nivel-capacidade-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/nivel-capacidade-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/nivel-capacidade-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/nivel-maturidade-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('nivel-maturidade', 'Unit | Model | nivel maturidade', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/nivel-maturidade-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/nivel-maturidade-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/nivel-maturidade-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/person-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('person', 'Unit | Model | person', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/person-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/person-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/person-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/pratica-especifica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('pratica-especifica', 'Unit | Model | pratica especifica', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/pratica-especifica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/pratica-especifica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/pratica-especifica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/models/produto-trabalho-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('produto-trabalho', 'Unit | Model | produto trabalho', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('crud-baseline/tests/unit/models/produto-trabalho-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/produto-trabalho-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/produto-trabalho-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/area-processo/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:area-processo/add', 'Unit | Route | area processo/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/area-processo/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/area-processo');
  QUnit.test('unit/routes/area-processo/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/area-processo/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/area-processo/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:area-processo/edit', 'Unit | Route | area processo/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/area-processo/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/area-processo');
  QUnit.test('unit/routes/area-processo/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/area-processo/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/area-processo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:area-processo', 'Unit | Route | area processo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/area-processo-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/area-processo-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/area-processo-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/category/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:category/add', 'Unit | Route | category/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/category/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/category');
  QUnit.test('unit/routes/category/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/category/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/category/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:category/edit', 'Unit | Route | category/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/category/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/category');
  QUnit.test('unit/routes/category/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/category/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/category-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:category', 'Unit | Route | category', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/category-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/category-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/category-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/citizen/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:citizen/add', 'Unit | Route | citizen/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/citizen/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/citizen');
  QUnit.test('unit/routes/citizen/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/citizen/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/citizen/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:citizen/edit', 'Unit | Route | citizen/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/citizen/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/citizen');
  QUnit.test('unit/routes/citizen/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/citizen/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/citizen-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:citizen', 'Unit | Route | citizen', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/citizen-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/citizen-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/citizen-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/city/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:city/add', 'Unit | Route | city/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/city/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/city');
  QUnit.test('unit/routes/city/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/city/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/city/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:city/edit', 'Unit | Route | city/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/city/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/city');
  QUnit.test('unit/routes/city/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/city/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/city-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:city', 'Unit | Route | city', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/city-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/city-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/city-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/meta-especifica/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:meta-especifica/add', 'Unit | Route | meta especifica/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/meta-especifica/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/meta-especifica');
  QUnit.test('unit/routes/meta-especifica/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/meta-especifica/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/meta-especifica/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:meta-especifica/edit', 'Unit | Route | meta especifica/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/meta-especifica/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/meta-especifica');
  QUnit.test('unit/routes/meta-especifica/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/meta-especifica/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/meta-especifica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:meta-especifica', 'Unit | Route | meta especifica', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/meta-especifica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/meta-especifica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/meta-especifica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/meta-generica/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:meta-generica/add', 'Unit | Route | meta generica/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/meta-generica/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/meta-generica');
  QUnit.test('unit/routes/meta-generica/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/meta-generica/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/meta-generica/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:meta-generica/edit', 'Unit | Route | meta generica/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/meta-generica/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/meta-generica');
  QUnit.test('unit/routes/meta-generica/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/meta-generica/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/meta-generica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:meta-generica', 'Unit | Route | meta generica', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/meta-generica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/meta-generica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/meta-generica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/modelo/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:modelo/add', 'Unit | Route | modelo/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/modelo/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/modelo');
  QUnit.test('unit/routes/modelo/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/modelo/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/modelo/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:modelo/edit', 'Unit | Route | modelo/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/modelo/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/modelo');
  QUnit.test('unit/routes/modelo/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/modelo/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/modelo-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:modelo', 'Unit | Route | modelo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/modelo-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/modelo-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/modelo-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/nivel-capacidade/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:nivel-capacidade/add', 'Unit | Route | nivel capacidade/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/nivel-capacidade/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/nivel-capacidade');
  QUnit.test('unit/routes/nivel-capacidade/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/nivel-capacidade/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/nivel-capacidade/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:nivel-capacidade/edit', 'Unit | Route | nivel capacidade/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/nivel-capacidade/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/nivel-capacidade');
  QUnit.test('unit/routes/nivel-capacidade/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/nivel-capacidade/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/nivel-capacidade-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:nivel-capacidade', 'Unit | Route | nivel capacidade', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/nivel-capacidade-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/nivel-capacidade-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/nivel-capacidade-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/nivel-maturidade/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:nivel-maturidade/add', 'Unit | Route | nivel maturidade/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/nivel-maturidade/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/nivel-maturidade');
  QUnit.test('unit/routes/nivel-maturidade/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/nivel-maturidade/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/nivel-maturidade/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:nivel-maturidade/edit', 'Unit | Route | nivel maturidade/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/nivel-maturidade/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/nivel-maturidade');
  QUnit.test('unit/routes/nivel-maturidade/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/nivel-maturidade/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/nivel-maturidade-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:nivel-maturidade', 'Unit | Route | nivel maturidade', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/nivel-maturidade-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/nivel-maturidade-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/nivel-maturidade-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/person/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:person/add', 'Unit | Route | person/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/person/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/person');
  QUnit.test('unit/routes/person/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/person/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/person/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:person/edit', 'Unit | Route | person/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/person/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/person');
  QUnit.test('unit/routes/person/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/person/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/person-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:person', 'Unit | Route | person', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/person-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/person-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/person-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/pratica-especifica/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:pratica-especifica/add', 'Unit | Route | pratica especifica/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/pratica-especifica/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/pratica-especifica');
  QUnit.test('unit/routes/pratica-especifica/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/pratica-especifica/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/pratica-especifica/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:pratica-especifica/edit', 'Unit | Route | pratica especifica/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/pratica-especifica/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/pratica-especifica');
  QUnit.test('unit/routes/pratica-especifica/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/pratica-especifica/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/pratica-especifica-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:pratica-especifica', 'Unit | Route | pratica especifica', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/pratica-especifica-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/pratica-especifica-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/pratica-especifica-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/produto-trabalho/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:produto-trabalho/add', 'Unit | Route | produto trabalho/add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/produto-trabalho/add-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/produto-trabalho');
  QUnit.test('unit/routes/produto-trabalho/add-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/produto-trabalho/add-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/produto-trabalho/edit-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:produto-trabalho/edit', 'Unit | Route | produto trabalho/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/produto-trabalho/edit-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/produto-trabalho');
  QUnit.test('unit/routes/produto-trabalho/edit-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/produto-trabalho/edit-test.js should pass jshint.'); 
  });

});
define('crud-baseline/tests/unit/routes/produto-trabalho-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:produto-trabalho', 'Unit | Route | produto trabalho', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('crud-baseline/tests/unit/routes/produto-trabalho-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/produto-trabalho-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/produto-trabalho-test.js should pass jshint.'); 
  });

});
define('crud-baseline/utils/computed', ['exports', 'ember-cli-flash/utils/computed'], function (exports, computed) {

	'use strict';



	exports['default'] = computed['default'];

});
define('crud-baseline/utils/object-compact', ['exports', 'ember-cli-flash/utils/object-compact'], function (exports, object_compact) {

	'use strict';



	exports['default'] = object_compact['default'];

});
define('crud-baseline/utils/object-only', ['exports', 'ember-cli-flash/utils/object-only'], function (exports, object_only) {

	'use strict';



	exports['default'] = object_only['default'];

});
define('crud-baseline/utils/object-without', ['exports', 'ember-cli-flash/utils/object-without'], function (exports, object_without) {

	'use strict';



	exports['default'] = object_without['default'];

});
define('crud-baseline/validators/relationship-presence', ['exports', 'ember-validations/validators/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({
    call: function call() {
      if (Ember.isEmpty(this.model.get(this.property).get('content'))) {
        this.errors.pushObject("não pode ser vazio");
      }
    }
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('ember-magic-crud/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-magic-crud';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ember-magic-crud/tests/test-helper");
} else {
  require("ember-magic-crud/app")["default"].create({"name":"crud-baseline","version":"0.0.0+a9bc8278"});
}

/* jshint ignore:end */
//# sourceMappingURL=crud-baseline.map