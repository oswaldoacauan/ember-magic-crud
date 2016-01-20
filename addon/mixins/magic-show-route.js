import Ember from 'ember';
import MagicCrud from './magic-crud';
import MagicBaseRoute from './magic-base-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicBaseRoute, {
  // Validation Object name
  validationObject: 'validations',

  // Definitions Object name
  definitionObject: 'formDefinitionsMC',

  // Magic Crud Options object name
  magicCrudObject: 'magicCrud',

  renderTemplate: function(){
    this.render('magic-crud/show');
  },

  model(param){
    return this.store.findRecord(this.get('routeBase'), param.id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    const{
      routeBase,
      validationObject,
      definitionObject,
      magicCrudObject,
    } = getProperties(this, 'routeBase', 'validationObject', 'definitionObject', 'magicCrudObject');

    controller.reopen(MagicCrud);

    [validationObject, definitionObject, magicCrudObject].forEach((obj) => {
        controller.set(obj, this.controllerFor(routeBase).get(obj));
    });

    controller.init();
  },

  actions:{
    cancelAction(){
      this.transitionTo(this.get('routeBase'));
    },
  }
});
