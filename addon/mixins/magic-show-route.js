import Ember from 'ember';
import MagicCrud from './magic-crud';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create({
  editDone: false,

  // Validation Object name
  validationObject: 'validations',

  // Definitions Object name
  definitionObject: 'formDefinitionsMC',

  // Magic Crud Options object name
  magicCrudObject: 'magicCrud',

  // Save success message
  saveMessage: 'Record saved successfully',

  canRollbackModel: true,

  // Split route name
  routeSplit: Ember.computed('routeName', function(){
    return this.get('routeName').split('.');
  }),

  // Route base name
  routeBase: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[0];
  }),

  // Route method name
  routeMethod: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[1];
  }),

  renderTemplate: function(){
    this.render('magic-crud/show', {
      into: 'application'
    });
  },

  model(param){
    return this.store.findRecord(this.get('routeBase'), param.id);
  },

  setupController(controller, model) {
    console.log('setupController');
    this._super(controller, model);
    const{
      routeBase,
      validationObject,
      definitionObject,
      magicCrudObject,
    } = getProperties(this, 'routeBase', 'validationObject', 'definitionObject', 'magicCrudObject');

    if(this.get('editDone')){
      return;
    }
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
